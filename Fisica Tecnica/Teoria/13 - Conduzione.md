Avviene a causa di molecole con più energia cinetica (temperatura più alta) che impattano contro molecole con meno energia cinetica trasferendogliene parte.
Il risultato è un trasferimento di energia dalla parte più calda di un materiale a quella più fredda.
- Nei liquidi la conduzione è simile a quella nei gas (collisioni molecolari) ma con una densità molecolare maggiore
- Nei solidi la conduzione avviene per la vibrazione del reticolo molecolare
#### Legger di Fourier
$$q_x=-\lambda\frac{\delta T}{\delta x}, q_y=-\lambda\frac{\delta T}{\delta y}, q_z=-\lambda\frac{\delta T}{\delta z}$$
$$q = q_x\hat i+q_y\hat j + q_z\hat k =-\lambda\nabla T$$
$q=$ Vettore del flusso termico ($W/m^2$)
$\lambda =$ Conduttività termica
$\nabla T=$ Gradiente di temperatura ($K/m$)
$\hat i, \hat j, \hat k$ sono i versori lungo le direzioni $x,y,z$ rispettivamente
#### Conduzione del calore in geometria piana
$$\rho c\frac{\delta T}{\delta t}=\lambda \left(\frac{\delta^2T}{\delta^2x}+\frac{\delta^2T}{\delta^2y}+\frac{\delta^2T}{\delta^2z}\right)+q_{\text{gen}}$$
$\rho$: Densità materiale
$c$: Calore specifico a pressione costante
$T$: Distribuzione temperatura in funzione del tempo ($t$) e dello spazio ($x,y,z$)
$\lambda$: Conduttività termica
$q_\text{gen}$: Generazione interna di calore per unità di calore ($W/m^3$)
Variazioni del gradiente di temperatura noti:
- Equazione di Fourier: Assenza di generazione interna ($q_\text{gen}=0$) $$\nabla^2T=\frac{1}{\alpha}\frac{\delta T}{\delta t}$$
- Equazione di Laplace: Assenza di generazione interna e regime stazionario ($\frac{\delta T}{\delta t}=0$) $$\nabla^2T = 0$$
- Equazione di Poisson: Regime stazionario con generazione interna ($q_\text{gen}\neq 0$) $$\nabla^2T+\frac{\dot q}{k}=0$$
Ci si trova in regime stazionario quando non vi è variazione dell'energia interna della parete nel tempo, ovvero la parete non accumula energia (il flusso termico entrante è uguale a quello uscente): $\frac{dE_\text{parete}}{dt}=\dot Q_e - \dot Q_u=0\implies \dot Q_e=\dot Q_u$
Ne deriva che il flusso termico nella parete deve essere costante: $\dot Q_{cond, parete}=$ costante
### Conduzione termica nelle pareti piane
Sapendo che $\dot Q=q\cdot A$, ovvero la potenza termica è il flusso termico moltiplicato per l'area (della parete in questo caso) e applicando la Legge di Fourier vista prima otteniamo $$\dot Q_\text{cond,parete}=-\lambda A\frac{dT}{dx}$$Poiché il flusso termico è costante (come visto prima), l'area e la conduttività sono costanti, ne consegue che anche il termine $\frac{dt}{dx}$ è costante. Ciò significa che la temperatura attraverso la parete varia linearmente con $x$.
Integrando tra $T_1$ e $T_2$ e tra $0$ e $L$ (spessore della parete) otteniamo
$$\dot Q_\text{cond, parete}=-\lambda A\frac{T_2-T_1}{L}=\lambda A\frac{T_1-T_2}{L}$$
Conoscendo la potenza termica posso ricavare la temperatura $T(x)$ in qualsiasi posizione $x$ tramite formula inversa.
## Resistenza termica
La formula per il calcolo della potenza termica può essere riscritta in modo analogo a quella della corrente elettrica $i=\frac{\Delta V}{R}$, ovvero
$$\dot Q_\text{cond,parete}=\frac{T_1-T_2}{R_\text{parete}}=\frac{\Delta T}{R_\text{parete}}$$
con
$$R_\text{parete}=\frac{L}{\lambda A}$$
Questa analogia si può applicare anche a convezione e irraggiamento:
$$\dot Q_\text{conv}=\frac{T_\text{spf}-T_\infty}{R_\text{conv}}\hspace{1cm}R_\text{conv}=\frac{1}{hA}$$
$$\dot Q_\text{irr}=\frac{T_\text{spf}-T_\text{amb}}{R_\text{irr}}\hspace{1cm} R_\text{irr}=\frac{1}{h_\text{irr}A}$$
Quando una superficie è soggetta sia a irraggiamento sia a convezione le resistenza si trovano in parallelo. Se $T_\text{amb} \approx T_\infty$ si può approssimare usando una sola resistenza tenendo $h_\text{comb}=h+h_\text{irr}$ ottenendo quindi
$$R_\text{conv+irr}=\frac{1}{h_\text{comb}A}$$
## Conduzione termica in cilindri e sfere
### Cilindri
$$\dot Q_\text{cond,cil}=-\lambda A\frac{dT}{dr}=2\pi L\lambda\frac{T_1-T_2}{\ln{(r_2/r_1)}}=\frac{T_1-T_2}{R_\text{cil}}\hspace{1cm}R_\text{cil}=\frac{\ln{(r_2/r_1)}}{2\pi L\lambda}$$
### Sfere
$$\dot Q_\text{cond,sfera}=-\lambda A\frac{dT}{dr}=4\pi r_1r_2\lambda\frac{T_1-T_2}{r_2-r_1}=\frac{T_1-T_2}{R_\text{sfera}}\hspace{1cm}R_\text{sfera}=\frac{r_2-r_1}{4\pi r_1r_2\lambda}$$
Per pareti, cilindri o sfere multistrato si calcolano le resistenze di ogni strato e si sommano per trovare la potenza termica. Essendo in regime stazionario la potenza è costante in ogni strato e posso quindi poi ricavare la temperatura in ogni punto.
### Raggio critico di isolamento
Nelle sfere o nei cilindri aggiungere uno strato di isolamento non sempre riduce la potenza termica, infatti l'aggiunta di questo strato fa sì aumentare la resistenza conduttiva però fa aumentare la superficie esposta alla convezione riducendo quindi la resistenza convettiva.
Esiste un raggio tale per cui la diminuzione di trasferimento termico è massima e si chiama **raggio critico di isolamento** ($r_\text{cr,cil}$).
$$r_\text{cr,cil}=\frac{\lambda}{h}$$
