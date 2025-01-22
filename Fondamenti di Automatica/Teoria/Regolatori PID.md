I regolatori più utilizzati in ambito industriale sono i PID, o regolatori ad azione Proporzionale, Integrale, Derivativa.
## Modello
La variabile di controllo $u$ è generata come la somma di tre contributi:
- Il primo è proporzionale all'errore $e$ tra il segnale di riferimento $w$ e la variabile di uscita $y$
- Il secondo è proporzionale all'integrale di $e$ ed è richiesto per imporre un errore nullo a transitorio esaurito a fronte di segnali di riferimento o disturbi additivi costanti
- Il terzo è proporzionale alla derivata di $e$ e ha lo scopo di "anticipare" l'andamento dell'errore negli istanti futuri
$$\frac{de}{dt} > 0 \implies (\mu > 0) \implies u \text{ aumenta} \implies y \text{ aumenta} \implies e = w - y \text{ diminuisce}$$
## Legge di controllo
$$u(t) = K_P e(t) + K_I \int_{t_0}^t e(\tau)d\tau + K_D\frac{det(t)}{dt}$$
- $K_P =$ coefficiente dell'azione proporzionale
- $K_I =$ coefficiente dell'azione integrale
- $K_D =$ coefficiente dell'azione derivativa
## PID ideale
Il PID ideale è un sistema con due zeri a parte reale negativa e un solo polo nell'origine:
$$R_{\text{PID}}(s) = \mu \frac{(1+s\tau_1)(1+s\tau_2)}{s}$$
## PID reale
Per ottenere il PID reale aggiungo un polo reale:
$$R_{\text{PID}}^a(s) = K_P\left(1 + \frac{1}{T_Is} + \frac{T_D}{1+\frac{T_D}{N}s}s \right)$$
Il polo in $s = - \frac{N}{T_D}$ modifica la posizione degli zeri della funzione di trasferimento del PID reale rispetto a quella del PID ideale, tuttavia, per $N$ sufficientemente grande, le posizioni degli zeri coincidono approssimativamente.
Alla slide 325, istruzioni per progettare PID reale.