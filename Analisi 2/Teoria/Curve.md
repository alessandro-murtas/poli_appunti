## Curva parametrica in $\mathbb{R}^n$
Una curva in forma parametrica in $\mathbb{R}^n$ è una funzione $\underline{r}: I \to \mathbb{R}^n$ definita su un intervallo $I \subseteq \mathbb{R}$ che associa ad ogni parametro $t \in I$ un punto $\underline{r}(t) = (x(t), y(t), ...) \in \mathbb{R}^n$.
Qui, $x(t), y(t), ...$ sono funzioni reali che descrivono le coordinate del punto in funzione del parametro $t$.
## Curva regolare
Una curva $\underline{r}:I\subseteq\mathbb{R}\to\mathbb{R}^n$ si dice regolare se
$$ \underline{r}\in C^1(I)\;\land\;\underline{r}'(t)\neq\underline{0}\;\;\;\forall t\in I$$
Un esempio è la seguente curva:
$$\underline r(t)=(\cos t,\sin t, t)$$
## Curva regolare a tratti
Una curva regolare a tratti è $\underline{r}:I\subseteq\mathbb{R}\to\mathbb{R}^n$ continua tale che esiste un numero finito $m$ di intervalli $I_i$ dove $\underline{r}$ è regolare e $I=\underset{i=1}{\overset{m}{\cup}}I_i$
In altre parole una curva regolare a tratti è una curva continua unione di curve regolari.
Un esempio può essere la seguente curva:
$$\underline{r}(t) =
\begin{cases}
(t,2t^2,2t^3) &\text{ se } t \in [0,1] \\
(1,1+t,1+t^2) &\text{ se } t \in (1,2]
\end{cases}$$