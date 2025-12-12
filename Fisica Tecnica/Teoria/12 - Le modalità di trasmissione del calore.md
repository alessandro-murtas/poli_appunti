### Nozioni base
- Calore: forma di energia che può essere trasferito da un sistema a un altro per effetto della differenza di temperatura
- Lo scambio di energia sotto forma di calore avviene sempre **dal** corpo con la temperatura più alta **al** corpo con la temperatura più bassa e si interrompe quando i corpi hanno raggiunto la stessa temperatura (**equilibrio termico**)
- Tre modalità di scambio del calore (tutte e 3 richiedono differenza di temperatura):
	- Irraggiamento
	- Conduzione
	- Convezione
# Conduzione
Avviene per effetto dell'interazione tra particelle di una sostanza con più energia e particelle adiacenti con meno energia.
Nei gas e liquidi ciò avviene per le collisioni tra molecole nel loro moto casuale.
Nei solidi ciò avviene per la vibrazione delle molecole nel loro reticolo e all'energia trasportata dagli elettroni liberi.
#### Potenza termica
<center><img src="Conduzione calore.png" alt="drawing" width="250"/></center>
Potenza termica trasmessa per conduzione (misurata in $W$):
$$\dot Q_{cond}=\lambda A\frac{T_1-T_2}{\Delta x}=\lambda A\frac{\Delta T}{\Delta x}$$
Per spessori $x$ infinitesimali:
$$\dot Q_{cond}=-\lambda A\frac{dT}{dx}$$
**Conduttività termica $\lambda$**: rappresenta la capacità del materiale a condurre calore e si misura in $W/m\cdot \degree C$. Per valori elevati si dice che il materiale è un buon conduttore, al contrario per valori bassi il materiale è un cattivo conduttore o **isolante**.
**Gradiente di temperatura $\frac{dT}{dx}$**: Pendenza curva temperatura su un diagramma $T$-$x$
Il calore va spontaneamente nel verso delle temperature decrescenti (quindi il gradiente di temperatura è negativo) quindi si inserisce il **segno negativo** per fare risultare la potenza termica positiva.
**Superficie normale $A$**: rappresenta l'area della superficie normale alla direzione di propagazione del calore (Area maggiore $\implies$ maggiore trasferimento di calore)
**Calore specifico $c_p$**: Capacità di accumulo termico per unità di massa e si misura in $J/kg\cdot\degree C$
**Capacità termica $\rho c_p$**: Capacità di accumulo termico per unità di volume e si misura in $J/m^3\cdot\degree C$
**Diffusività termica $\alpha$**: Rappresenta la velocità alla quale il calore si diffonde attraverso un materiale e si misura in $m^2/s$.
$$\alpha=\frac{\text{calore trasmesso per conduzione}}{\text{calore immagazzinato}}=\frac{\lambda}{\rho c}\;\;\;\left(\frac{m^2}{s}\right)$$
Dalla formula si può intuire che all'aumentare della conduttività termica e al diminuire della capacità termica aumenta la diffusività termica e quindi una propagazione più veloce del calore. Per valori piccoli invece aumenta il calore trattenuto dal materiale e diminuisce quella condotta oltre.
# Convezione
Trasmissione del calore tra una superficie solida e il liquido o gas adiacente in movimento. Implica azione combinata di **conduzione** e **trasporto di massa** (che caxxo è?).
È proporzionale alla velocità del fluido.
In assenza di trasporto di massa la trasmissione di calore tra superficie solida e il fluido adiacente avviene solo per conduzione.
Si distingue in:
- **Conduzione forzata**: se il fluido è forzato a scorrere sulla superficie da dispositivi esterni come ventilatori, pompe, vento...
- **Conduzione libera**: se il fluido si muove a causa di forze ascensionali legate a variazioni di temperatura nel fluido.
### Legge di Newton
$$\dot Q_{conv}=hA_{spf}(T_{spf}-T_\infty) $$
$h$: coefficiente di trasmissione del calore per convezione in $W/m^2\cdot\degree C$. Non dipende dal fluido 
$A_{spf}$: area della superficie attraverso cui la trasmissione di calore per convezione ha luogo
$T_{spf}$: temperatura della superficie
$T_{\infty}$: temperatura del fluido a distanza sufficientemente grande dalla superficie
# Irraggiamento