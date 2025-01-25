## Curva parametrica in $\mathbb{R}^n$
Una curva in forma parametrica in $\mathbb{R}^n$ è una funzione $\underline{r}: I \to \mathbb{R}^n$ definita su un intervallo $I \subseteq \mathbb{R}$ che associa ad ogni parametro $t \in I$ un punto $\underline{r}(t) = (x(t), y(t), ...) \in \mathbb{R}^n$.
Qui, $x(t), y(t), ...$ sono funzioni reali che descrivono le coordinate del punto in funzione del parametro $t$.
## Curva regolare
Una curva $\underline{r}(t)$ è detta regolare se la sua derivata $\underline{r}'(t)$ esiste, è continua su $I$ e non si annulla per nessun punto dell'intervallo $I$
$$\underline{r}'(t) = (x'(t), y'(t),...) \neq 0\;\; \forall t \in I$$
## Curva regolare a tratti
Una curva $\underline{r}(t)$ è detta regolare a tratti se può essere suddivisa in un numero finito di sottodomini, ed in ciascuno di essi è regolare.
In altre parole, la sua derivata $\underline{r}'(t)$ ha un numero finito di punti di discontinuità, ma su ciascun tratto rimane regolare.
Un esempio può essere la seguente curva:
$$\underline{r}(t) =
\begin{cases}
(t,2t^2,2t^3) &\text{ se } t \in [0,1] \\
(1,1+t,1+t^2) &\text{ se } t \in (1,2]
\end{cases}$$