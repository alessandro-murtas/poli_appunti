Sia $f: A \subseteq \mathbb{R}^n\to\mathbb{R}$, $A$ aperto, $\underline{x_0} \in A$.
Se $f$ è [[Differenziabilità|differenziabile]] in $\underline{x_0}$
$$\implies\exists D_{\underline{v}}f(\underline{x_0})\;\forall\underline{v}\in\mathbb{R}^n (|\underline{v}|=1) \land D_\underline{v}f(\underline{x_0})=\nabla f(\underline{x_0})\cdot \underline{v}$$
## Dimostrazione
Sia $\underline{v}\in\mathbb{R}^n$ un versore, $f$ è differenziabile in $x_0$.
$$\implies f(\underline{x_0}+t\underline{v}) = f(\underline{x_0})+\nabla f(\underline{x_0})\cdot t\underline{v}+o(|t\underline{v}|)$$
$$\lim_{t\to0}\frac{f(\underline{x_0}+t\underline{v})-f(\underline{x_0})}{t}=\lim_{t\to0}\frac{t\nabla f(\underline{x_0})\cdot\underline{v}+o(|t|)}{t}=\nabla f(\underline{x_0})\cdot \underline{v}$$
C.V.D.
## Osservazione
$$D_\underline{v}f(\underline{x_0})=\nabla f(\underline{x_0})\cdot\underline{v}=|\nabla f(\underline{x_0})||\underline{v}|\cos\alpha$$
Il valore massimo di $D_\underline{v}f(\underline{x_0})$ si ottiene per $\alpha=0$ (ovvero $\underline{v}$ con stessa direzione e verso del gradiente, che indica quindi la direzione di massima crescita).