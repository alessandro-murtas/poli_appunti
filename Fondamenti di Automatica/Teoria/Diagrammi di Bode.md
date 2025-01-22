I diagrammi di Bode sono costituiti da una coppia di curve che rappresentano, in funzione della pulsazione $\omega$, il modulo e la fase di $G(j\omega)$
- **Diagramma di Bode del modulo**
- **Diagramma di Bode della fase**
## Diagramma di Bode del modulo
Regole:
- In corrispondenza dei valori di $\omega$ uguali a $\frac{1}{|\tau_i|}$ o $\frac{1}{|T_i|}$ la pendenza aumenta o diminuisce di un numero di unità pari alla molteplicità dello zero o del polo corrispondenti
- In corrispondenza dei valori di $\omega$ uguali alle pulsazioni naturali $\alpha_{ni}$ o $\omega_{ni}$ la pendenza aumenta o diminuisce di un numero di unità pari al doppio della molteplicità delle coppie di zeri o poli corrispondenti
- La pendenza del diagramma asintotico del modulo per $\omega \to \infty$ è sempre pari al grado relativo, con il segno cambiato, della corrispondente funzione di trasferimento, cioè alla differenza tra il grado del polinomio a numeratore e il grado di quello a denominatore
## Diagramma di Bode della fase
Regole:
- Il diagramma della fase è costante a tratti
- A pulsazioni minori di tutti i termini $\frac{1}{|\tau_i|}$, $\frac{1}{|T_i|}$, $\alpha_{ni}$, $\omega_{ni}$ gli unici fattori di $G(j\omega)$ che lo determinano sono $\mu$ e $\frac{1}{(j\omega)^g}$
- Il tratto iniziale ha ordinata $\arg \mu - g90\degree$
- In corrispondenza dei valori di $\omega$ uguali a $\frac{1}{|\tau_i|}$ o $\frac{1}{|T_i|}$ l'ordinata aumenta ($\tau_i > 0$ e $T_i < 0$) o diminuisce ($\tau_i < 0$ e $T_i > 0$) di $90\degree$
- In corrispondenza dei valori di $\omega$ uguali alle pulsazioni naturali $\alpha_{ni}$ o $\omega_{ni}$ l'ordinata aumenta ($\zeta_i \geq 0$ e $\xi_i < 0$) o diminuisce ($\zeta_i < 0$ e $\xi_i \geq 0$) di $180\degree$
## Ritardo di tempo
$$G(s) = e^{-s\tau}, \tau > 0$$
$$G(j\omega) = e^{-j\omega\tau}$$
- Il diagramma del modulo è una retta orizzontale di ordinate nulla.
- La fase ha un andamento lineare in $\omega$ e quindi l'uso di una scala logaritmica genera una curva con andamento esponenziale
## Diagramma polare
Il diagramma polare è il luogo dei punti $G(j\omega)$ con $\omega \ge 0$ e può essere interpretato come l'immagine attraverso $G(s)$ del semiasse immaginario non negativo.
## Azione filtrante dei sistemi dinamici