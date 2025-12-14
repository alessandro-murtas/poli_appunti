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
- Equazione di Laplace: Assenza di generazione interna e regime stazionario $$\nabla^2T = 0$$
- Equazione di Poisson: Regime stazionario con generazione interna ($q_\text{gen}\neq 0$) $$\nabla^2T+\frac{\dot q}{k}=0$$
