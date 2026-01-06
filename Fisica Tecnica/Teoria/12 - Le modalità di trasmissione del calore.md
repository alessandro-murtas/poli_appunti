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
### Legge di Fourier della conduzione del calore
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
Trasmissione del calore tra una superficie solida e il liquido o gas adiacente in movimento. Implica azione combinata di **conduzione** e **trasporto di massa** (che caxxo è? #TODO controllare cos'è).
È proporzionale alla velocità del fluido.
In assenza di trasporto di massa la trasmissione di calore tra superficie solida e il fluido adiacente avviene solo per conduzione.
Si distingue in:
- **Conduzione forzata**: se il fluido è forzato a scorrere sulla superficie da dispositivi esterni come ventilatori, pompe, vento...
- **Conduzione libera**: se il fluido si muove a causa di forze ascensionali legate a variazioni di temperatura nel fluido.
### Legge di Newton
$$\dot Q_{conv}=hA_{spf}(T_{spf}-T_\infty) $$
$h$: coefficiente di trasmissione del calore per convezione in $W/m^2\cdot\degree C$. Non è una proprietà dal fluido ma dipende da vari fattori tra cui:
- Velocità del fluido
- Proprietà del fluido
- Natura del moto
- Geometria di superficie
$A_{spf}$: area della superficie attraverso cui la trasmissione di calore per convezione ha luogo
$T_{spf}$: temperatura della superficie
$T_{\infty}$: temperatura del fluido a distanza sufficientemente grande dalla superficie
# Irraggiamento
Energia emessa da sostanza sotto forma di **fotoni** come risultato di modificazioni nelle configurazioni elettroniche degli atomi o delle molecole.
Non richiede la presenza di un mezzo.
La trasmissione di calore per irraggiamento avviene alla velocità della luce e non si attenua nel vuoto.
Qualsiasi corpo con temperatura maggiore dello zero assoluto emette radiazione termica.
### Legge di Stefan-Boltzmann
$$\dot Q_{emis, max}=\sigma A_{spf}T_{spf}^4$$
$$\dot Q_{emis}=\varepsilon Q_{emis,max}=\varepsilon\sigma A_{spf}T_{spf}^4$$
**Costante di Stefan-Boltzmann $\sigma$**: $\sigma=5.67 \times 10^{-8}W/m^2 \cdot K^4$
**Corpo nero**: La superficie ideale che emette per irraggiamento tale potenza massima
**Emissività $\varepsilon$**: una misura di quanto il comportamento di una superficie si approssima a quello del corpo nero per cui $\varepsilon = 1$, ε è compreso nell'intervallo 0-1
$$\dot Q_{irr}=\text{Potenza term. radiante emessa}-\text{Potenza term. radiante assorbita}$$
Difficile da determinare e dipende da:
- Proprietà superfici
- Loro orientamento relativo
- Caratteristiche del mezzo tra le due superfici
Nel caso in cui una superficie è completamente contenuta in un altra di area molto più grande (o nera), a temperatura $T_{amb}$, separata da un gas, si può usare questa formula per la potenza termica
$$\dot Q_{irr}=\varepsilon\sigma A_{spf}(T_{spf}^4-T_{amb}^4)$$
Quando l’irraggiamento e la convezione avviene simultaneamente tra una superficie e un gas:
$$\dot Q_{tot}=h_{comb}A_{spf}(T_{spf}-T_{\infty})$$
Con $h_{comb}=h_{conv}+h_{irr}$ e $h_{irr}=\varepsilon\sigma(T_{spf}+T_{amb})(T_{spf}^2+T_{amb}^2)$
$h_{irr}$ si dice **coefficiente radiativo equivalente**
Adduttanza liminare
# Modalità simultanee di trasmissione del calore

|                        | Irragiamento |  Convezione  |  Conduzione  |
| ---------------------- | :----------: | :----------: | :----------: |
| Solido opaco           |              |              | $\checkmark$ |
| Solido semitrasparente | $\checkmark$ |              | $\checkmark$ |
| Fluido in quiete       | $\checkmark$ |              | $\checkmark$ |
| Fluido in moto         | $\checkmark$ | $\checkmark$ |              |
| Vuoto                  | $\checkmark$ |              |              |
La trasmissione del calore avviene solo per conduzione nei solidi opachi, mentre avviene per conduzione e irraggiamento nei solidi semitrasparenti. In un corpo solido vi può essere scambio di calore per conduzione e irraggiamento ma non per convezione.
Un solido può presentare trasmissione del calore per convezione e/o irraggiamento in corrispondenza delle superfici che lo delimitano se queste sono a contatto con un fluido o esposte ad altre superfici.
La trasmissione del calore avviene per conduzione ed eventualmente per irraggiamento in un fluido in quiete (nessun tipo di movimento all’interno del fluido), mentre avviene per convezione e irraggiamento in un fluido in moto.
In assenza di irraggiamento, la trasmissione del calore all’interno di un fluido può essere sia per convezione sia per conduzione, a seconda della presenza o meno di trasporto di massa. Convezione = Conduzione + fluido in moto.
La trasmissione di calore attraverso il vuoto è tramite irraggiamento.
I gas sono praticamente trasparenti alla radiazione.
I liquidi sono normalmente buoni assorbitori di radiazione.
