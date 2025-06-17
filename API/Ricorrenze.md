### Cosa sono?
Una **ricorrenza** è un'equazione che descrive una funzione (di solito il tempo di esecuzione di un algoritmo) in termini del suo valore su input più piccoli.
Esempio semplice:
$$T(n)=2T(n/2)+n$$
Qui stai dicendo: per risolvere un problema di dimensione $n$, risolvi due sotto problemi grandi la metà, e poi fai un lavoro aggiuntivo di tempo $n$.
### Come si risolvono
Uso il [[Master Theorem]] se la ricorrenza si presenta in forma $$T(n)=a\cdot T\left(\frac{n}{b}\right)+f(n)$$
Altrimenti se la ricorrenza si presenta in forma$$T(n) = a_1T(n-1) + a_2T(n-2)+\text{...}+a_kT(n-k)+bn^c$$sommo i coefficienti dei termini in $T$ e ottengo $$T(n)=n^{c}(a_1+a_2+\text{...}+a_k)^n$$
In quest'altra forma$$T(n)=aT(n-b)+cn^d$$Lo risolvo così$$T(n)=n^da^{\frac{n}{b}}$$