/**
 * Bloch Sphere 3D Interactive Visualizer
 * Minimal, publication-grade interactive Bloch sphere using Three.js.
 */

(function () {
  "use strict";

  // Prevent multiple script declarations
  if (window.__blochSphereRuntimeLoaded) return;
  window.__blochSphereRuntimeLoaded = true;

  // Coordinate Conversion:
  // Physics coordinates:
  //   +Z: |0> (up)
  //   -Z: |1> (down)
  //   +X: |+> (forward toward viewer)
  //   +Y: |i> (right)
  // Three.js coordinates:
  //   Three Y = Physics Z (up)
  //   Three X = Physics Y (right)
  //   Three Z = Physics X (forward toward viewer)
  function toThreeVec(xp, yp, zp) {
    return new THREE.Vector3(yp, zp, xp);
  }

  function fromThreeVec(v) {
    return { x: v.z, y: v.x, z: v.y };
  }

  function parseAngle(val, defaultVal = 0) {
    if (val === undefined || val === null) return defaultVal;
    if (typeof val === "number") return val;
    val = String(val).trim().toLowerCase();
    if (val === "pi") return Math.PI;
    if (val === "pi/2") return Math.PI / 2;
    if (val === "pi/3") return Math.PI / 3;
    if (val === "pi/4") return Math.PI / 4;
    if (val === "pi/6") return Math.PI / 6;
    if (val === "2*pi" || val === "2pi") return 2 * Math.PI;
    if (val === "3*pi/2" || val === "3pi/2") return (3 * Math.PI) / 2;

    // Check for fractions of pi like "0.5*pi" or "pi * 0.75"
    if (val.includes("pi")) {
      const expr = val.replace(/pi/g, String(Math.PI));
      try {
        // Safe evaluation of simple math expressions
        return Function(`"use strict"; return (${expr})`)();
      } catch (e) {
        return defaultVal;
      }
    }

    // Check for degrees like "45deg" or "45°"
    if (val.endsWith("deg") || val.endsWith("°")) {
      const num = parseFloat(val);
      return (num * Math.PI) / 180;
    }

    const num = parseFloat(val);
    return isNaN(num) ? defaultVal : num;
  }

  function parseBasisStates(config) {
    const raw = config.basisStates ?? config.basis ?? config.basisVectors;
    // Default: only 0 and 1
    if (raw === undefined || raw === null) {
      return new Set(["0", "1"]);
    }
    let arr = [];
    if (Array.isArray(raw)) {
      arr = raw;
    } else if (typeof raw === "string") {
      arr = raw.split(",").map((s) => s.trim());
    }
    const set = new Set();
    for (const item of arr) {
      const s = String(item).trim().toLowerCase();
      if (s === "0" || s === "|0>" || s === "|0⟩") set.add("0");
      else if (s === "1" || s === "|1>" || s === "|1⟩") set.add("1");
      else if (s === "+" || s === "|+>" || s === "|+⟩" || s === "+x") set.add("+");
      else if (s === "-" || s === "|->" || s === "|-⟩" || s === "-x") set.add("-");
      else if (s === "i" || s === "|i>" || s === "|i⟩" || s === "+y") set.add("i");
      else if (s === "-i" || s === "|-i>" || s === "|-i⟩" || s === "-y") set.add("-i");
    }
    return set;
  }

  function getThemeColors() {
    const isDark =
      document.documentElement.getAttribute("saved-theme") === "dark" ||
      document.documentElement.dataset.theme === "dark" ||
      document.body.classList.contains("dark");

    return {
      isDark,
      sphere: isDark ? 0x94a3b8 : 0x64748b,
      sphereOpacity: isDark ? 0.08 : 0.07,
      equatorDisc: isDark ? 0x38bdf8 : 0x0284c7,
      equatorDiscOpacity: isDark ? 0.04 : 0.03,
      equatorLine: isDark ? 0x475569 : 0xcbd5e1,
      meridianLine: isDark ? 0x334155 : 0xe2e8f0,
      axes: isDark ? 0x64748b : 0x94a3b8,
      axesOpacity: 0.7,
      vector: isDark ? 0x38bdf8 : 0x0284c7,
      vectorTip: isDark ? 0x0284c7 : 0x0369a1,
      thetaArc: isDark ? 0xf97316 : 0xea580c,
      phiArc: isDark ? 0xf59e0b : 0xd97706,
      projLine: isDark ? 0x64748b : 0x94a3b8,
      projPoint: isDark ? 0x38bdf8 : 0x0284c7,
      trail: isDark ? 0x38bdf8 : 0x0ea5e9,
      rotationAxis: isDark ? 0xa855f7 : 0x9333ea,
    };
  }

  // Predefined quantum gates
  const GATES = {
    x: { axis: [1, 0, 0], angle: Math.PI, name: "Pauli-X (π on X)" },
    y: { axis: [0, 1, 0], angle: Math.PI, name: "Pauli-Y (π on Y)" },
    z: { axis: [0, 0, 1], angle: Math.PI, name: "Pauli-Z (π on Z)" },
    h: {
      axis: [1 / Math.SQRT2, 0, 1 / Math.SQRT2],
      angle: Math.PI,
      name: "Hadamard H (π on (X+Z)/√2)",
    },
    s: { axis: [0, 0, 1], angle: Math.PI / 2, name: "Phase S (π/2 on Z)" },
    t: { axis: [0, 0, 1], angle: Math.PI / 4, name: "T Gate (π/4 on Z)" },
  };

  class BlochSphereInstance {
    constructor(container) {
      this.container = container;
      this.viewport = container.querySelector(".bloch-viewport");
      this.labelsLayer = container.querySelector(".bloch-labels-layer");
      this.infoPanel = container.querySelector(".bloch-info");

      // Parse configuration from data attribute
      let config = {};
      try {
        const raw = container.getAttribute("data-bloch") || "{}";
        config = JSON.parse(raw);
      } catch (e) {
        console.warn("Failed to parse bloch config:", e);
      }
      this.config = config;

      // Initial state
      this.initTheta = parseAngle(config.theta, Math.PI / 3);
      this.initPhi = parseAngle(config.phi, Math.PI / 4);

      // Check named state shortcuts
      if (config.state) {
        const s = String(config.state).trim().toLowerCase();
        if (s === "0" || s === "|0>") {
          this.initTheta = 0;
          this.initPhi = 0;
        } else if (s === "1" || s === "|1>") {
          this.initTheta = Math.PI;
          this.initPhi = 0;
        } else if (s === "+" || s === "|+>") {
          this.initTheta = Math.PI / 2;
          this.initPhi = 0;
        } else if (s === "-" || s === "|->") {
          this.initTheta = Math.PI / 2;
          this.initPhi = Math.PI;
        } else if (s === "i" || s === "|i>") {
          this.initTheta = Math.PI / 2;
          this.initPhi = Math.PI / 2;
        } else if (s === "-i" || s === "|-i>") {
          this.initTheta = Math.PI / 2;
          this.initPhi = (3 * Math.PI) / 2;
        }
      }

      this.currentTheta = this.initTheta;
      this.currentPhi = this.initPhi;
      this.stateLabelText = config.stateLabel || "|ψ⟩";

      this.showAngles = config.showAngles !== false;
      this.showProjections = config.showProjections !== false;
      this.enabledBasis = parseBasisStates(config);

      // Animation config
      this.hasAnimation = false;
      this.animation = null;
      this.animProgress = 0;
      this.isPlaying = false;
      this.isLooping = Boolean(config.animation?.loop ?? config.loop ?? false);
      this.animDuration = config.animation?.duration ?? config.duration ?? 2500;
      this.lastTimestamp = null;
      this.trailPoints = [];

      this.parseAnimationConfig(config);

      // Three.js Scene Setup
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      this.defaultCameraPos = new THREE.Vector3(2.4, 1.8, 2.6);
      this.camera.position.copy(this.defaultCameraPos);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.viewport.appendChild(this.renderer.domElement);

      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.minDistance = 2.0;
      this.controls.maxDistance = 6.0;
      this.controls.rotateSpeed = 0.8;

      this.colors = getThemeColors();
      this.labels = {};

      this.buildScene();
      this.bindControls();
      this.updateState(this.currentTheta, this.currentPhi);

      // Observers
      this.isVisible = true;
      this.setupObservers();

      // Start render loop
      this.animate = this.animate.bind(this);
      this.rafId = requestAnimationFrame(this.animate);

      if (config.autoplay) {
        this.play();
      }
    }

    parseAnimationConfig(config) {
      const anim = config.animation || {};
      const gateKey = (anim.gate || config.gate || "").toLowerCase().trim();

      let rotAxis = null;
      let rotAngle = 0;
      let gateName = "";

      if (gateKey && GATES[gateKey]) {
        rotAxis = GATES[gateKey].axis;
        rotAngle = GATES[gateKey].angle;
        gateName = GATES[gateKey].name;
      } else if (anim.axis || config.axis) {
        const rawAxis = anim.axis || config.axis;
        if (Array.isArray(rawAxis) && rawAxis.length === 3) {
          const len = Math.hypot(rawAxis[0], rawAxis[1], rawAxis[2]);
          rotAxis = len > 0 ? [rawAxis[0] / len, rawAxis[1] / len, rawAxis[2] / len] : [0, 0, 1];
        }
        rotAngle = parseAngle(anim.angle ?? config.angle, Math.PI);
        gateName = anim.name || `Rotation around (${rotAxis.map((n) => n.toFixed(2)).join(",")})`;
      }

      if (rotAxis) {
        this.hasAnimation = true;
        this.animation = {
          axis: rotAxis,
          angle: rotAngle,
          name: gateName,
        };
      }
    }

    buildScene() {
      // 1. Lights
      const ambient = new THREE.AmbientLight(0xffffff, 0.9);
      this.scene.add(ambient);
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
      dirLight.position.set(3, 5, 4);
      this.scene.add(dirLight);

      // 2. Translucent Sphere Body
      const sphereGeom = new THREE.SphereGeometry(1.0, 48, 36);
      this.sphereMat = new THREE.MeshLambertMaterial({
        color: this.colors.sphere,
        transparent: true,
        opacity: this.colors.sphereOpacity,
        depthWrite: false,
      });
      this.sphereMesh = new THREE.Mesh(sphereGeom, this.sphereMat);
      this.scene.add(this.sphereMesh);

      // 3. Equator Translucent Plane Disc
      if (this.config.showEquatorPlane !== false) {
        const discGeom = new THREE.CircleGeometry(1.0, 48);
        this.discMat = new THREE.MeshBasicMaterial({
          color: this.colors.equatorDisc,
          transparent: true,
          opacity: this.colors.equatorDiscOpacity,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        this.discMesh = new THREE.Mesh(discGeom, this.discMat);
        this.discMesh.rotation.x = Math.PI / 2; // Flat in xy-plane
        this.scene.add(this.discMesh);
      }

      // 4. Equator & Meridian Circles
      this.circleGroup = new THREE.Group();
      this.circleMat = new THREE.LineBasicMaterial({
        color: this.colors.equatorLine,
        transparent: true,
        opacity: 0.65,
      });
      this.meridianMat = new THREE.LineBasicMaterial({
        color: this.colors.meridianLine,
        transparent: true,
        opacity: 0.4,
      });

      // Equator (z=0)
      this.circleGroup.add(this.createCircleLine(1.0, "xy", this.circleMat));
      // Prime Meridian (y=0)
      this.circleGroup.add(this.createCircleLine(1.0, "xz", this.meridianMat));
      // Secondary Meridian (x=0)
      this.circleGroup.add(this.createCircleLine(1.0, "yz", this.meridianMat));
      this.scene.add(this.circleGroup);

      // 5. Axes
      this.axesGroup = new THREE.Group();
      this.axisMat = new THREE.LineBasicMaterial({
        color: this.colors.axes,
        transparent: true,
        opacity: this.colors.axesOpacity,
      });
      this.axisDashedMat = new THREE.LineDashedMaterial({
        color: this.colors.axes,
        dashSize: 0.05,
        gapSize: 0.04,
        transparent: true,
        opacity: this.colors.axesOpacity * 0.7,
      });

      const axisLen = 1.25;
      // Z Axis (vertical, -z to +z)
      this.axesGroup.add(this.createAxisLine([0, 0, 0], [0, 0, axisLen], false));
      this.axesGroup.add(this.createAxisLine([0, 0, -axisLen], [0, 0, 0], true));
      this.axesGroup.add(this.createAxisCone([0, 0, axisLen], [0, 0, 1]));

      // X Axis (forward, -x to +x)
      this.axesGroup.add(this.createAxisLine([0, 0, 0], [axisLen, 0, 0], false));
      this.axesGroup.add(this.createAxisLine([-axisLen, 0, 0], [0, 0, 0], true));
      this.axesGroup.add(this.createAxisCone([axisLen, 0, 0], [1, 0, 0]));

      // Y Axis (right, -y to +y)
      this.axesGroup.add(this.createAxisLine([0, 0, 0], [0, axisLen, 0], false));
      this.axesGroup.add(this.createAxisLine([0, -axisLen, 0], [0, 0, 0], true));
      this.axesGroup.add(this.createAxisCone([0, axisLen, 0], [0, 1, 0]));

      this.scene.add(this.axesGroup);

      // 5b. Basis State Vertex Markers on Sphere Surface (R = 1.0)
      this.basisMarkersGroup = new THREE.Group();
      this.basisMarkerMat = new THREE.MeshBasicMaterial({ color: this.colors.axes });
      const markerGeom = new THREE.SphereGeometry(0.024, 16, 16);

      const basisPosMap = {
        "0": [0, 0, 1.0],
        "1": [0, 0, -1.0],
        "+": [1.0, 0, 0],
        "-": [-1.0, 0, 0],
        "i": [0, 1.0, 0],
        "-i": [0, -1.0, 0],
      };

      for (const [key, pos] of Object.entries(basisPosMap)) {
        if (this.enabledBasis.has(key)) {
          const marker = new THREE.Mesh(markerGeom, this.basisMarkerMat);
          marker.position.copy(toThreeVec(...pos));
          this.basisMarkersGroup.add(marker);
        }
      }
      this.scene.add(this.basisMarkersGroup);

      // 6. Dynamic Objects: Vector, Arcs, Projections, Trail
      this.dynamicGroup = new THREE.Group();
      this.scene.add(this.dynamicGroup);

      // Trajectory trail line
      const trailGeom = new THREE.BufferGeometry();
      trailGeom.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(300 * 3), 3)
      );
      this.trailMat = new THREE.LineBasicMaterial({
        color: this.colors.trail,
        linewidth: 2,
        transparent: true,
        opacity: 0.85,
      });
      this.trailMesh = new THREE.Line(trailGeom, this.trailMat);
      this.scene.add(this.trailMesh);

      // If animation has a rotation axis, add visual axis indicator
      if (this.hasAnimation && this.animation.axis) {
        this.addRotationAxisVisual(this.animation.axis);
      }

      // Initialize HTML Labels
      this.initLabels();
    }

    createCircleLine(radius, plane, mat) {
      const segments = 96;
      const points = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const cos = Math.cos(theta) * radius;
        const sin = Math.sin(theta) * radius;
        if (plane === "xy") points.push(toThreeVec(cos, sin, 0));
        else if (plane === "xz") points.push(toThreeVec(cos, 0, sin));
        else if (plane === "yz") points.push(toThreeVec(0, cos, sin));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      return new THREE.Line(geom, mat);
    }

    createAxisLine(start, end, dashed) {
      const p1 = toThreeVec(...start);
      const p2 = toThreeVec(...end);
      const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      const line = new THREE.Line(geom, dashed ? this.axisDashedMat : this.axisMat);
      if (dashed) line.computeLineDistances();
      return line;
    }

    createAxisCone(pos, dir) {
      const coneGeom = new THREE.ConeGeometry(0.035, 0.08, 16);
      const coneMat = new THREE.MeshBasicMaterial({ color: this.colors.axes });
      const cone = new THREE.Mesh(coneGeom, coneMat);

      const target = toThreeVec(...pos);
      cone.position.copy(target);

      // Rotate cone to align with axis direction
      const dirVec = toThreeVec(...dir).normalize();
      cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dirVec);
      return cone;
    }

    addRotationAxisVisual(axis) {
      const p1 = toThreeVec(axis[0] * -1.35, axis[1] * -1.35, axis[2] * -1.35);
      const p2 = toThreeVec(axis[0] * 1.35, axis[1] * 1.35, axis[2] * 1.35);
      const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      const mat = new THREE.LineDashedMaterial({
        color: this.colors.rotationAxis,
        dashSize: 0.06,
        gapSize: 0.04,
        transparent: true,
        opacity: 0.6,
      });
      const line = new THREE.Line(geom, mat);
      line.computeLineDistances();
      this.scene.add(line);
    }

    initLabels() {
      // Coordinate axis labels
      this.createLabel("x", "x", [1.42, 0, 0], "bloch-label-axis");
      this.createLabel("y", "y", [0, 1.42, 0], "bloch-label-axis");
      this.createLabel("z", "z", [0, 0, 1.15], "bloch-label-axis");

      // Basis state labels (configurable, default: only 0 and 1)
      if (this.enabledBasis.has("0")) {
        this.createLabel("zero", "|0⟩", [0, 0, 1.38], "bloch-label-basis");
      }
      if (this.enabledBasis.has("1")) {
        this.createLabel("one", "|1⟩", [0, 0, -1.38], "bloch-label-basis");
      }
      if (this.enabledBasis.has("+")) {
        this.createLabel("plus", "|+⟩", [1.22, 0, 0], "bloch-label-basis");
      }
      if (this.enabledBasis.has("-")) {
        this.createLabel("minus", "|-⟩", [-1.25, 0, 0], "bloch-label-basis");
      }
      if (this.enabledBasis.has("i")) {
        this.createLabel("i", "|i⟩", [0, 1.22, 0], "bloch-label-basis");
      }
      if (this.enabledBasis.has("-i")) {
        this.createLabel("minus_i", "|-i⟩", [0, -1.25, 0], "bloch-label-basis");
      }

      // Dynamic labels
      this.createLabel("state", this.stateLabelText, [0, 0, 1], "bloch-label-state");
      this.createLabel("theta", "θ", [0, 0, 0.5], "bloch-label-angle");
      this.createLabel("phi", "φ", [0.5, 0, 0], "bloch-label-angle");
    }

    createLabel(id, text, pos, extraClass = "") {
      const el = document.createElement("div");
      el.className = `bloch-label ${extraClass}`;
      el.textContent = text;
      this.labelsLayer.appendChild(el);
      this.labels[id] = { el, pos, threePos: toThreeVec(...pos) };
    }

    updateLabelPos(id, pos) {
      if (this.labels[id]) {
        this.labels[id].pos = pos;
        this.labels[id].threePos = toThreeVec(...pos);
      }
    }

    updateState(theta, phi) {
      this.currentTheta = theta;
      this.currentPhi = phi;

      // Vector in physics coordinates
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);
      const sinP = Math.sin(phi);
      const cosP = Math.cos(phi);

      const vx = sinT * cosP;
      const vy = sinT * sinP;
      const vz = cosT;

      // Clear previous dynamic elements
      while (this.dynamicGroup.children.length > 0) {
        const obj = this.dynamicGroup.children[0];
        this.dynamicGroup.remove(obj);
        if (obj.geometry) obj.geometry.dispose();
      }

      const threeV = toThreeVec(vx, vy, vz);
      const vLen = 1.0;

      // 1. Vector Shaft & Tip
      // Shaft
      const shaftGeom = new THREE.CylinderGeometry(0.016, 0.016, vLen, 16);
      shaftGeom.translate(0, vLen / 2, 0);
      const shaftMat = new THREE.MeshBasicMaterial({ color: this.colors.vector });
      const shaft = new THREE.Mesh(shaftGeom, shaftMat);
      shaft.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        threeV.clone().normalize()
      );
      this.dynamicGroup.add(shaft);

      // Cone Tip
      const tipGeom = new THREE.ConeGeometry(0.048, 0.12, 20);
      const tipMat = new THREE.MeshBasicMaterial({ color: this.colors.vectorTip });
      const tip = new THREE.Mesh(tipGeom, tipMat);
      tip.position.copy(threeV);
      tip.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        threeV.clone().normalize()
      );
      this.dynamicGroup.add(tip);

      // State label position (slightly past the tip)
      this.updateLabelPos("state", [vx * 1.22, vy * 1.22, vz * 1.22]);

      // 2. Projections onto xy-plane and z-axis
      if (this.showProjections && sinT > 0.01) {
        // Drop line from (vx, vy, vz) down to (vx, vy, 0)
        const pDrop1 = threeV;
        const pDrop2 = toThreeVec(vx, vy, 0);
        const dropGeom = new THREE.BufferGeometry().setFromPoints([pDrop1, pDrop2]);
        const dropMat = new THREE.LineDashedMaterial({
          color: this.colors.projLine,
          dashSize: 0.04,
          gapSize: 0.03,
          transparent: true,
          opacity: 0.65,
        });
        const dropLine = new THREE.Line(dropGeom, dropMat);
        dropLine.computeLineDistances();
        this.dynamicGroup.add(dropLine);

        // Radial projection line from (0,0,0) to (vx, vy, 0)
        const radGeom = new THREE.BufferGeometry().setFromPoints([
          toThreeVec(0, 0, 0),
          pDrop2,
        ]);
        const radLine = new THREE.Line(radGeom, dropMat);
        radLine.computeLineDistances();
        this.dynamicGroup.add(radLine);

        // Point on equatorial plane
        const ptGeom = new THREE.SphereGeometry(0.024, 12, 12);
        const ptMat = new THREE.MeshBasicMaterial({ color: this.colors.projPoint });
        const ptMesh = new THREE.Mesh(ptGeom, ptMat);
        ptMesh.position.copy(pDrop2);
        this.dynamicGroup.add(ptMesh);
      }

      // 3. Theta Arc & Label
      if (this.showAngles && theta > 0.04) {
        const rTheta = 0.52;
        const thetaSegments = Math.max(8, Math.round((theta / Math.PI) * 32));
        const thetaPts = [];
        for (let i = 0; i <= thetaSegments; i++) {
          const t = (i / thetaSegments) * theta;
          thetaPts.push(
            toThreeVec(rTheta * Math.sin(t) * cosP, rTheta * Math.sin(t) * sinP, rTheta * Math.cos(t))
          );
        }
        const thetaGeom = new THREE.BufferGeometry().setFromPoints(thetaPts);
        const thetaMat = new THREE.LineBasicMaterial({
          color: this.colors.thetaArc,
          linewidth: 2,
        });
        this.dynamicGroup.add(new THREE.Line(thetaGeom, thetaMat));

        // Position theta label at mid-angle
        const midT = theta * 0.5;
        const rThetaLbl = rTheta + 0.12;
        this.updateLabelPos("theta", [
          rThetaLbl * Math.sin(midT) * cosP,
          rThetaLbl * Math.sin(midT) * sinP,
          rThetaLbl * Math.cos(midT),
        ]);
        if (this.labels["theta"]) this.labels["theta"].el.style.display = "block";
      } else if (this.labels["theta"]) {
        this.labels["theta"].el.style.display = "none";
      }

      // 4. Phi Arc & Label (in xy-plane)
      let normPhi = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      if (this.showAngles && normPhi > 0.04 && sinT > 0.05) {
        const rPhi = 0.44;
        const phiSegments = Math.max(8, Math.round((normPhi / (2 * Math.PI)) * 48));
        const phiPts = [];
        for (let i = 0; i <= phiSegments; i++) {
          const p = (i / phiSegments) * normPhi;
          phiPts.push(toThreeVec(rPhi * Math.cos(p), rPhi * Math.sin(p), 0));
        }
        const phiGeom = new THREE.BufferGeometry().setFromPoints(phiPts);
        const phiMat = new THREE.LineBasicMaterial({
          color: this.colors.phiArc,
          linewidth: 2,
        });
        this.dynamicGroup.add(new THREE.Line(phiGeom, phiMat));

        // Position phi label at mid-angle
        const midP = normPhi * 0.5;
        const rPhiLbl = rPhi + 0.12;
        this.updateLabelPos("phi", [rPhiLbl * Math.cos(midP), rPhiLbl * Math.sin(midP), 0]);
        if (this.labels["phi"]) this.labels["phi"].el.style.display = "block";
      } else if (this.labels["phi"]) {
        this.labels["phi"].el.style.display = "none";
      }

      // Update info readout
      this.updateInfoReadout(theta, phi, vx, vy, vz);
    }

    updateInfoReadout(theta, phi, x, y, z) {
      if (!this.infoPanel) return;
      const degT = Math.round((theta * 180) / Math.PI);
      let normP = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      const degP = Math.round((normP * 180) / Math.PI);

      // State formula: |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩
      const c = Math.cos(theta / 2);
      const s = Math.sin(theta / 2);
      const re = (s * Math.cos(normP)).toFixed(2);
      const im = (s * Math.sin(normP)).toFixed(2);

      let ketPart = "";
      if (Math.abs(s) < 0.01) {
        ketPart = `|0⟩`;
      } else if (Math.abs(c) < 0.01) {
        ketPart = `|1⟩`;
      } else {
        const sign = parseFloat(im) >= 0 ? "+" : "-";
        const absIm = Math.abs(parseFloat(im));
        ketPart = `${c.toFixed(2)}|0⟩ + (${re} ${sign} ${absIm}i)|1⟩`;
      }

      this.infoPanel.innerHTML = `
        <div class="bloch-info-row">
          <div class="bloch-info-item"><span class="bloch-info-label">θ:</span> <span class="bloch-info-val">${degT}°</span></div>
          <div class="bloch-info-item"><span class="bloch-info-label">φ:</span> <span class="bloch-info-val">${degP}°</span></div>
        </div>
        <div class="bloch-info-state">${this.stateLabelText} = ${ketPart}</div>
      `;
    }

    updateTheme(themeName) {
      this.colors = getThemeColors();
      if (this.sphereMat) {
        this.sphereMat.color.setHex(this.colors.sphere);
        this.sphereMat.opacity = this.colors.sphereOpacity;
      }
      if (this.discMat) {
        this.discMat.color.setHex(this.colors.equatorDisc);
        this.discMat.opacity = this.colors.equatorDiscOpacity;
      }
      if (this.circleMat) this.circleMat.color.setHex(this.colors.equatorLine);
      if (this.meridianMat) this.meridianMat.color.setHex(this.colors.meridianLine);
      if (this.axisMat) this.axisMat.color.setHex(this.colors.axes);
      if (this.basisMarkerMat) this.basisMarkerMat.color.setHex(this.colors.axes);
      if (this.trailMat) this.trailMat.color.setHex(this.colors.trail);

      this.updateState(this.currentTheta, this.currentPhi);
    }

    bindControls() {
      const playBtn = this.container.querySelector('[data-action="play"]');
      const restartBtn = this.container.querySelector('[data-action="restart"]');
      const loopBtn = this.container.querySelector('[data-action="loop"]');
      const resetViewBtn = this.container.querySelector('[data-action="reset-view"]');

      if (playBtn) {
        playBtn.addEventListener("click", () => {
          if (this.isPlaying) {
            this.pause();
          } else {
            this.play();
          }
        });
      }

      if (restartBtn) {
        restartBtn.addEventListener("click", () => {
          this.restart();
        });
      }

      if (loopBtn) {
        if (this.isLooping) loopBtn.classList.add("active");
        loopBtn.addEventListener("click", () => {
          this.isLooping = !this.isLooping;
          loopBtn.classList.toggle("active", this.isLooping);
        });
      }

      if (resetViewBtn) {
        resetViewBtn.addEventListener("click", () => {
          this.resetCamera();
        });
      }
    }

    play() {
      if (!this.hasAnimation) return;
      if (this.animProgress >= 1.0) {
        this.animProgress = 0;
        this.trailPoints = [];
      }
      this.isPlaying = true;
      this.lastTimestamp = performance.now();
      const playBtn = this.container.querySelector('[data-action="play"]');
      if (playBtn) {
        playBtn.innerHTML = `
          <svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
        `;
        playBtn.setAttribute("title", "Pause animation");
      }
    }

    pause() {
      this.isPlaying = false;
      const playBtn = this.container.querySelector('[data-action="play"]');
      if (playBtn) {
        playBtn.innerHTML = `
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        `;
        playBtn.setAttribute("title", "Play animation");
      }
    }

    restart() {
      this.animProgress = 0;
      this.trailPoints = [];
      this.updateTrail();
      this.updateState(this.initTheta, this.initPhi);
      this.play();
    }

    resetCamera() {
      const startPos = this.camera.position.clone();
      const endPos = this.defaultCameraPos.clone();
      const startTime = performance.now();
      const duration = 600;

      const tween = () => {
        const now = performance.now();
        const t = Math.min((now - startTime) / duration, 1.0);
        // Smooth cubic ease out
        const ease = 1 - Math.pow(1 - t, 3);
        this.camera.position.lerpVectors(startPos, endPos, ease);
        this.controls.target.set(0, 0, 0);
        this.controls.update();
        if (t < 1.0) {
          requestAnimationFrame(tween);
        }
      };
      tween();
    }

    updateAnimation(deltaMs) {
      if (!this.isPlaying || !this.hasAnimation) return;

      this.animProgress += deltaMs / this.animDuration;

      if (this.animProgress >= 1.0) {
        if (this.isLooping) {
          this.animProgress = 0;
          this.trailPoints = [];
        } else {
          this.animProgress = 1.0;
          this.pause();
        }
      }

      // Smooth sinusoidal in-out ease
      const p = this.animProgress;
      const ease = 0.5 - 0.5 * Math.cos(Math.PI * p);

      // Rotation around axis
      const curAngle = this.animation.angle * ease;
      const axis = this.animation.axis;

      // Initial state vector
      const v0 = [
        Math.sin(this.initTheta) * Math.cos(this.initPhi),
        Math.sin(this.initTheta) * Math.sin(this.initPhi),
        Math.cos(this.initTheta),
      ];

      // Rodrigues' rotation formula:
      // v' = v*cos + (axis x v)*sin + axis*(axis . v)*(1 - cos)
      const cosA = Math.cos(curAngle);
      const sinA = Math.sin(curAngle);
      const dot = axis[0] * v0[0] + axis[1] * v0[1] + axis[2] * v0[2];
      const cross = [
        axis[1] * v0[2] - axis[2] * v0[1],
        axis[2] * v0[0] - axis[0] * v0[2],
        axis[0] * v0[1] - axis[1] * v0[0],
      ];

      const vx = v0[0] * cosA + cross[0] * sinA + axis[0] * dot * (1 - cosA);
      const vy = v0[1] * cosA + cross[1] * sinA + axis[1] * dot * (1 - cosA);
      const vz = v0[2] * cosA + cross[2] * sinA + axis[2] * dot * (1 - cosA);

      // Convert back to theta, phi
      const clampedZ = Math.max(-1, Math.min(1, vz));
      const newTheta = Math.acos(clampedZ);
      let newPhi = Math.atan2(vy, vx);
      if (newPhi < 0) newPhi += 2 * Math.PI;

      this.updateState(newTheta, newPhi);

      // Record trajectory trail on sphere
      if (this.trailPoints.length === 0 || this.trailPoints.length < 250) {
        const threePt = toThreeVec(vx * 1.002, vy * 1.002, vz * 1.002);
        this.trailPoints.push(threePt);
        this.updateTrail();
      }
    }

    updateTrail() {
      const posAttr = this.trailMesh.geometry.attributes.position;
      const count = this.trailPoints.length;
      for (let i = 0; i < count; i++) {
        const p = this.trailPoints[i];
        posAttr.setXYZ(i, p.x, p.y, p.z);
      }
      this.trailMesh.geometry.setDrawRange(0, count);
      posAttr.needsUpdate = true;
    }

    renderLabels() {
      const width = this.viewport.clientWidth;
      const height = this.viewport.clientHeight;

      for (const id in this.labels) {
        const item = this.labels[id];
        if (!item || !item.el) continue;

        const vec = item.threePos.clone();
        vec.project(this.camera);

        // If behind camera
        if (vec.z > 1) {
          item.el.style.opacity = "0";
          continue;
        }

        const sx = (vec.x * 0.5 + 0.5) * width;
        const sy = (-vec.y * 0.5 + 0.5) * height;

        item.el.style.left = `${sx}px`;
        item.el.style.top = `${sy}px`;
        item.el.style.opacity = "1";
      }
    }

    setupObservers() {
      // 1. ResizeObserver
      this.resizeObserver = new ResizeObserver(() => {
        this.onResize();
      });
      this.resizeObserver.observe(this.viewport);

      // 2. IntersectionObserver (pause rendering when out of viewport)
      this.intersectionObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          this.isVisible = entry.isIntersecting;
        }
      });
      this.intersectionObserver.observe(this.viewport);
    }

    onResize() {
      const width = this.viewport.clientWidth;
      const height = this.viewport.clientHeight;
      if (width === 0 || height === 0) return;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }

    animate(now) {
      this.rafId = requestAnimationFrame(this.animate);

      if (!this.isVisible) return;

      if (this.isPlaying && this.lastTimestamp !== null) {
        const delta = Math.min(now - this.lastTimestamp, 100);
        this.updateAnimation(delta);
      }
      this.lastTimestamp = now;

      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.renderLabels();
    }

    destroy() {
      cancelAnimationFrame(this.rafId);
      if (this.resizeObserver) this.resizeObserver.disconnect();
      if (this.intersectionObserver) this.intersectionObserver.disconnect();
      if (this.controls) this.controls.dispose();
      if (this.renderer) {
        this.renderer.dispose();
        if (this.renderer.domElement.parentElement) {
          this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
        }
      }
    }
  }

  // Registry of active instances
  const activeInstances = new Map();

  function initAllBlochSpheres() {
    const containers = document.querySelectorAll(".bloch-container");
    containers.forEach((container, idx) => {
      if (container.dataset.initialized === "true") return;

      // Assign unique ID if none
      if (!container.id) container.id = `bloch-widget-${idx}-${Date.now()}`;

      // Destroy existing instance if container was replaced in SPA
      if (activeInstances.has(container.id)) {
        activeInstances.get(container.id).destroy();
        activeInstances.delete(container.id);
      }

      const instance = new BlochSphereInstance(container);
      activeInstances.set(container.id, instance);
      container.dataset.initialized = "true";
    });
  }

  // Global theme updater
  function handleThemeChange() {
    activeInstances.forEach((inst) => inst.updateTheme());
  }

  // Listeners for Quartz lifecycle
  window.initBlochSpheres = initAllBlochSpheres;

  // SPA navigation hook
  document.addEventListener("nav", () => {
    initAllBlochSpheres();
  });

  // Theme change hook
  document.addEventListener("themechange", () => {
    handleThemeChange();
  });

  // Fallback observer for saved-theme attribute on root
  const themeObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === "saved-theme" || mutation.attributeName === "data-theme") {
        handleThemeChange();
        break;
      }
    }
  });
  themeObserver.observe(document.documentElement, { attributes: true });

  // DOM ready check
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllBlochSpheres);
  } else {
    initAllBlochSpheres();
  }
})();
