Siano $f \in C^2(A), A\subseteq\mathbb{R}^n$ aperto e $\underline{x_0} \in A$ un [[Punti critici|punto critico]] per $f$, ovvero $\underline{\nabla}f(\underline{x_0})=0$.
Se $d^2f(\underline{x_0})$ è
1. Definita positiva $\implies \underline{x_0}$ è un punto di di minimo locale forte
2. Definita negativa $\implies \underline{x_0}$ è un punto di di massimo locale forte
3. Indefinita $\implies \underline{x_0}$ è una sella (o colle)
## Dimostrazione
$f \in C^2(A)\implies$ vale la [[Formula di Taylor|formula di Taylor]] al secondo ordine con resto di Peano
$$\Delta f(\underline{x_0})=f(\underline{x_0}+h)-f(\underline{x_0})=\frac{1}{2}d^2f(\underline{x_0})\underline{h}+o(|\underline{h}|^2)$$
#### Definita positiva
Se $d^2f(\underline{x_0})$ è definita positiva
$d^2f(\underline{x_0})\underline{h} \geq \lambda_{\text{min}}|\underline{h}|^2$ dove $\lambda_{\text{min}}$ è il più piccolo autovalore di $H_f(\underline{x_0})$ ed è positivo.
$$\implies\Delta f(\underline{x_0})\geq \frac{1}{2}\lambda_{\text{min}}|\underline{h}|^2+o(|\underline{h}|^2)=|\underline{h}|^2\left(\frac{1}{2}\lambda_{\text{min}}+o(1)\right)>0$$
$\forall\;\underline{h}$ abbastanza piccolo, $\underline{h}\neq \underline{0}$;
Quindi $\underline{x_0}$ è un punto di minimo locale forte.
C.V.D.
#### Definita negativa
Se $d^2f(\underline{x_0})$ è definita negativa
$d^2f(\underline{x_0})\underline{h} \leq \lambda_{\text{max}}|\underline{h}|^2$ dove $\lambda_{\text{max}}$ è il più grande autovalore di $H_f(\underline{x_0})$ ed è negativo.
$$\implies\Delta f(\underline{x_0})\leq \frac{1}{2}\lambda_{\text{max}}|\underline{h}|^2+o(|\underline{h}|^2)=|\underline{h}|^2\left(\frac{1}{2}\lambda_{\text{max}}+o(1)\right)<0$$
$\forall\;\underline{h}$ abbastanza piccolo, $\underline{h}\neq \underline{0}$;
Quindi $\underline{x_0}$ è un punto di massimo locale forte.
C.V.D.
#### Indefinita
Se $d^2f(\underline{x_0})$ è indefinita $\exists\underline{h_1},\underline{h_2}\neq0$ (scelgo $|\underline{h_1}|=|\underline{h_2}|=1$):
$$d^2f(\underline{x_0})\underline{h_1}>0\land d^2f(\underline{x_0})\underline{h_2}>0$$
Guardo $f$ ristretta alle rette $\underline{x_0}+t\underline{h_1}$ e $\underline{x_0}+t\underline{h_2}$ e ottengo:
##### $h_1$
$$
\begin{split}
&f(\underline{x_0}+t\underline{h_1})-f(\underline{x_0})=\frac{1}{2}d^2f(\underline{x_0})(t\underline{h_1})+o(t|\underline{h_1}|^2)= \\
=&\frac{1}{2}t^2d^2f(\underline{x_0})\underline{h_1}+o(t^2)=t^2\left(\frac{1}{2}d^2f(\underline{x_0})\underline{h_1}+o(1)\right)>0
\end{split}$$
$\implies \underline{x_0}$ è un punto di minimo per $f$ ristretta a $\underline{x_0}+t\underline{h}_1$
##### $h_2$
$$
\begin{split}
&f(\underline{x_0}+t\underline{h_2})-f(\underline{x_0})=\frac{1}{2}d^2f(\underline{x_0})(t\underline{h_2})+o(t|\underline{h_2}|^2)= \\
=&\frac{1}{2}t^2d^2f(\underline{x_0})\underline{h_2}+o(t^2)=t^2\left(\frac{1}{2}d^2f(\underline{x_0})\underline{h_2}+o(1)\right)<0
\end{split}$$
$\implies \underline{x_0}$ è un punto di massimo per $f$ ristretta a $\underline{x_0}+t\underline{h}_2$
Quindi $\underline{x_0}$ è una sella.
C.V.D.