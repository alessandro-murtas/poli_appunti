## Definizione
La funzione complessa
$$G(j\omega) = C(j\omega I - A)^{-1}B + D\hspace{1cm} G(j\omega) = |G(j\omega)|e^{j \,arg\,G(j\omega)}$$
definita per valori della variabile reale $\omega$ non negativi viene chiamata **risposta in frequenza** associata al sistema
$$\dot{x}(t) = Ax(t) +Bu(t)$$
$$y(t) = Cx(t) + Du(t)$$

## Teorema fondamentale della risposta in frequenza
Se si applica a un **sistema lineare asintoticamente stabile**, con funzione di trasferimento $G(s)$, l'ingresso sinusoidale:
$$u(t) = U sin(\omega_0 t)$$
l'uscita a transitorio esaurito assume l'andamento
$$\widetilde{y}(t) = |G(j\omega_0)|Usin(\omega_0t + arg\,G(j\omega_0))$$
indipendentemente dallo stato iniziale

## Proprietà
La risposta in frequenza coincide con la restrizione della funzione di trasferimento G(s) ai punti appartenenti al semiasse immaginario positivo.
### Osservazioni
- Se $G(s)$ possiede dei poli sull'asse immaginario, i corrispondenti valori della pulsazione $\omega$ vanno esclusi nella definizione della risposta in frequenza, per evitare che essa assuma valore infinito
- La conoscenza della risposta in frequenza permette il calcolo di $G(j\omega)$ anche per valori negativi di $\omega$
- Il concetto di risposta in frequenza può essere esteso anche a sistemi multivariabili e a sistemi a dimensione infinita, purché lineari e stazionari
- In generale, per un sistema con funzione di trasferimento $G(s)$, si chiamerà risposta in frequenza la funzione $G(j\omega)$ definita per tutti i valori non negativi di $\omega$ per cui la definizione è ben posta