# Funzioni regolari a tratti
Sia $f:[0,T]\to\mathbb{R}$, regolare a tratti in $[0,T]$ (quindi integrabile).
Allora la sua [[Serie di Fourier|serie di Fourier]] converge puntualmente $\forall x \in [0,T]$ alla funzione:
$$\tilde{f}(x) =
\begin{cases}
\hspace{13pt}f(x) &\text{ dove $f$ è continua}\\
\frac{f(x^+)+f(x^-)}{2} &\text{ dove $f$ non è continua}
\end{cases}
$$
$$\tilde{f}(0)=\tilde{f}(T)=\frac{f(0^+)+f(T^-)}{2}$$
$$f(x_0^+)=\lim_{x\to x_0^+}f(x);f(x_0^-)=\lim_{x\to x_0^-}f(x)$$
# Funzioni monotone a tratti
Sia $f:[0,T]\to\mathbb{R}$, limitata in $[0,T]$ e [[Monotonia|monotona a tratti]] (posso dividere $[0,T]$ in un numero finito di intervalli dove $f$ è monotona crescente o decrescente), allora vale la stessa conclusione del precedente teorema.