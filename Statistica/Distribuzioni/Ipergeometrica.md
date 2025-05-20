La distribuzione ipergeometrica si usa quando si ha a che fare con estrazioni senza reimmissione.
$X = G(a, b, c)$
$$p_X(k)=\mathbb{P}(X = k) = \frac{\binom{a}{k}\binom{b}{c-k}}{\binom{a+b}{c}}$$
Affidabilità del sistema:
$$\mathbb{P}(E)=\sum_{k=0}^c\mathbb{P}(E|X=k)\mathbb{P}(X=k)$$
Valore atteso (somma di tutti i valori possibile pesati per probabilità):
$$\mathbb{E}[X]=\sum_{i=1}^\infty x_i\mathbb{P}(X=x_i)$$
Covarianza a due variabili:
	$$\text{Cov}(X,Y)=\mathbb{E}[X\cdot Y]-\mathbb{E}[X]\cdot\mathbb{E}[Y]$$