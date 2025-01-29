## Definizione in $\mathbb{R}^2$
Sia $f: \mathbb{R}^2 \to \mathbb{R}$, dico che $f$ è **differenziabile** in $(x_0, y_0)$ se
$$\exists\; \underline{a} = (a_1, a_2) \in \mathbb{R}^2: \lim_{(x,y)\to(0,0)} \frac{f(x_0+x,y_0+y) - f(x_0, y_0) - a_1x -a_2y}{\sqrt{x^2+y^2}} = 0$$
Oppure
$$\exists\; \underline{a} = (a_1, a_2) \in \mathbb{R}^2: \lim_{(x,y)\to(x_0,y_0)} \frac{f(x,y) - f(x_0, y_0) - a_1x -a_2y}{\sqrt{(x-x_0)^2+(y-y_0)^2}} = 0$$
## Definizione in $\mathbb{R}^n$
Sia $f: \mathbb{R}^n \to \mathbb{R}$, dico che $f$ è **differenziabile** in $\underline{x_0}$ se
$$\exists\; \underline{a} \in \mathbb{R}^n: \lim_{\underline{x}\to\underline{x_0}} \frac{f(\underline{x}) - f(\underline{x_0}) - \underline{a}\cdot (\underline{x}-\underline{x_0})}{|\underline{x} - \underline{x_0}|} = 0$$
## Significato geometrico
La differenziabilità implica che, vicino al punto $(x_0, y_0)$ la funzione è approssimabile da un piano tangente, ovvero che la differenza tra la quota $z$ del punto e il piano stesso è trascurabile.
Per trovare questo piano tangente, vedere [[Piano tangente a una funzione|qui]].

## Condizione sufficiente per differenziabilità
Sia $f: A \subseteq \mathbb{R}^n \to \mathbb{R}$, $A$ aperto, $\underline{x_0} \in A$.
Se $\exists\; U_\pi(\underline{x_0}): \forall \underline{x} \in U_\pi(\underline{x_0}) \;f$ è derivabile in $\underline{x}$ e le derivate parziali sono continue in $\underline{x_0} \implies f$ è differenziabile in $\underline{x_0}$.
In particolare se $f \in C^1(A) \implies f$ è differenziabile in $A$.
**Non è condizione necessaria**.

### Dimostrazione ($n = 2$)

#### Ipotesi
$f$ derivabile in un $U_\pi (x_0, y_0)$ e $\delta xf(x,y),\delta yf(x,y)$ sono continue in $(x_0, y_0)$.
#### Tesi
$$f(x_0+h, y_0+h) - f(x_0, y_0) = \delta xf(x_0,y_0)h + \delta yf(x_0, y_0)k + o\left(\sqrt{h^2 + k^2}\right)$$
Incremento una variabile alla volta:
$$f(x_0+h, y_0+k) - f(x_0, y_0) = f(x_0+h, y_0+k) - f(x_0+h, y_0) + f(x_0+h, y_0) - f(x_0, y_0)$$
Studiando $A = f(x_0+h, y_0+k) - f(x_0+h, y_0)$ mi apparirà il contributo di $\delta yf$, studiando $B = f(x_0+h, y_0) - f(x_0, y_0)$ mi apparirà $\delta yf$.
Quindi grazie al [[Lagrange|teorema di Lagrange]]:
$$A = g_2'(y_0 + \delta_2k)k; \;\delta_2(h, k)\in(0,1)$$
$$B = g_1'(x_0 + \delta_1h)h; \;\delta_1(h, k)\in(0,1)$$
Quindi
$$B + A = \delta xf(x_0+\delta_1h, y_0)h + \delta yf(x_0+h, y_0+\delta_2k)k$$
$\delta xf$ e $\delta yf$ sono continue in $(x_0, y_0)$
$$\delta xf(x_0+\delta_1h,y_0) = \delta xf(x_0, y_0) + \varepsilon_1(h)$$
$$\delta yf(x_0+h,y_0+\delta_2h) = \delta yf(x_0, y_0) + \varepsilon_2(h,k)$$
$\varepsilon_1(h)$ e $\varepsilon_2(h,k) \to 0$ se $(h,k)\to(0,0) \implies B + A = \delta xf(x_0,y_0)h + \delta yf(x_0,y_0)k + E(h,k)$
Con $E(h,k) = \varepsilon_1(h)h + \varepsilon_2(h, k)k$, se $E(h,k)=o\left(\sqrt{h^2+k^2}\right)$ abbiamo completato la dimostrazione.
$$\left|\frac{E(h,k)}{\sqrt{h^2+k^2}}\right| \leq \left|\frac{\varepsilon_1(h)h + \varepsilon_2(h, k)k}{\sqrt{h^2+k^2}}\right| \leq \frac{|\varepsilon_1(h)||h|+|\varepsilon_2(h,k)||k|}{\sqrt{h^2+k^2}} \leq |\varepsilon_1(h)| + |\varepsilon_2(h,k)| \to 0 \text{ per } (h,k)\to (0,0)$$
C.V.D.

## Condizioni necessarie per la differenziabilità
Sia $f$ differenziabile in $\underline{x_0}$ allora:
1. $f$ continua in $\underline{x_0}$
2. $f$ derivabile in $\underline{x_0}$ e $\underline{a}=\nabla f(\underline{x_0})$
### Dimostrazione
#### Continuità
Tesi: $f$ continua in $\underline{x_0}$
$$f(\underline{x})=f(\underline{x_0}) + \underline{a}\cdot(\underline{x}-\underline{x_0}) + o(|\underline{x}-\underline{x_0}|)$$
$$f(\underline{x}) - f(\underline{x_0}) = \underline{a}\cdot(\underline{x}-\underline{x_0}) + o(|\underline{x}-\underline{x_0}|)$$
$$\lim_{\underline{x}\to\underline{x_0}} (f(\underline{x})-f(\underline{x_0}))=0$$
Quindi $f$ è continua nel punto.
C.V.D.
#### Derivabilità
Tesi: $f$ derivabile in $\underline{x_0}$ quindi
$$\exists\text{ finito } \lim_{h\to 0} \frac{f(\underline{x}+\underline{e}_ih)-f(\underline{x_0})}{h}, i=1,..,n$$
Essendo $f$ differenziabile:
$$\lim_{\underline{h}\to\underline{0}}\frac{f(\underline{x_0}+\underline{h})-f(\underline{x_0})-\underline{a}\cdot\underline{h}}{|\underline{h}|}=0$$
Prendo $\underline{h}=h\underline{e_i}, h\in\mathbb{R}$
$$\implies\lim_{h\to0}\frac{f(\underline{x_0}+h\underline{e_i})-f(\underline{x_0})-a_ih}{h}=0$$
$$\implies\lim_{h\to0}\left(\frac{f(\underline{x_0}+h\underline{e_i})-f(\underline{x_0})}{h}-a_i\right)=0$$
$$\implies\lim_{h\to0}\frac{f(\underline{x_0}+h\underline{e_i})-f(\underline{x_0})}{h}=a_i$$
Otteniamo così la formula della derivata.
$$\implies \exists\delta x_if(\underline{x_0})=a_i\;\;\forall\;1 ...i$$
Quindi $f$ è derivabile nel punto.
C.V.D.