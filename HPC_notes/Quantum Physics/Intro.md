```tikz
% Source - https://tex.stackexchange.com/a/349333
% Posted by Janosh, modified by community. See post 'Timeline' for change history
% Retrieved 2026-10-07, License - CC BY-SA 4.0

\usetikzlibrary{angles, quotes}

\begin{document}
\begin{tikzpicture}

  % Define radius
  \def\r{3}

  % Bloch vector
  \draw (0,0) node[circle, fill, inner sep=1] (orig) {} -- (\r/3,\r/2)
    node[circle, fill, inner sep=0.7, label=above:$\vert\psi\rangle$] (a) {};
  \draw[dashed] (orig) -- (\r/3, -\r/5) node (phi) {} -- (a);

  \draw (0,\r) node[circle, fill, inner sep=0.7, label=above left:$\vert 0\rangle$] (vec0) {};
  \draw (0,-\r) node[circle, fill, inner sep=0.7, label=below left:$\vert 1\rangle$] (vec1) {};
  % Sphere
  \draw (orig) circle (\r);
  \draw[dashed] (orig) ellipse (\r{} and \r/3);

  % Axes
  \draw[->] (orig) -- ++(-\r*2/5, -\r*3/10) node[below] (x) {$x$};
  \draw[->] (orig) -- ++(\r*14/15, -\r/9) node[right] (y) {$y$};
  \draw[->] (0, -7*\r/6) -- (0, 7*\r/6) node[above] (z) {$z$};

  % Angles
  \pic [draw=gray, text=gray, ->, "$\phi$"] {angle = x--orig--phi};
  \pic [draw=gray, text=gray, <-, "$\theta$", angle eccentricity=1.4] {angle = a--orig--z};

\end{tikzpicture}
\end{document}
```
