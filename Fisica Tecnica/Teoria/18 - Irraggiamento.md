Una superficie si dice:
- **Diffondente** se le sue proprietà sono indipendenti dalla direzione
- **Grigia** se le sue proprietà sono indipendenti dalla lunghezza d'onda
### Corpo nero
Un corpo nero
- Assorbe tutta la radiazione incidente
- È un perfetto emettitore ed assorbitore di radiazione
- Emette la massima radiazione per unità di area ad ogni temperatura
Potenza radiante emessa:
$$E_n(T)=\sigma T^4$$
Costante di Stefan-Boltzmann: $\sigma=5.67*10^{-8}W/m^2\cdot K^4$
### Emissività
Rapporto tra radiazione emessa da una superficie e radiazione emessa da un corpo nero alla stessa temperatura.
$$\varepsilon(T)=\frac{E(T)}{E_n(T)}$$
Varia con la temperatura e la direzione della radiazione emessa
### Coefficienti
Ci sono 3 coefficienti:
- assorbimento $\alpha=\frac{\text{rad. assorbita}}{\text{rad. incidente}}=\frac{G_\text{ass}}{G}$
- riflessione $\rho=\frac{\text{rad. riflessa}}{\text{rad. incidente}}=\frac{G_\text{rif}}{G}$
- trasmissione: $\tau=\frac{\text{rad. trasmessa}}{\text{rad. incidente}}=\frac{G_\text{tr}}{G}$
<center><img src="Coefficienti emissivita.png" height=200/></center>

Irradiazione $G$: radiazione incidente su una superficie
$G_\text{rif}+G_\text{ass}+G_\text{tr}=G$
Su qualsiasi superficie: $\alpha+\rho+\tau=1$
In una superficie opaca: $\alpha+\rho=1$
##### Legge di Kirchhoff
L’emissività emisferica totale di una superficie alla temperatura T è uguale al coefficiente di assorbimento emisferico totale per radiazione proveniente da un corpo nero alla stessa temperatura.
$$\varepsilon(T)=\alpha(T)$$
### Fattore di vista
$F_{ij}=$ frazione della radiazione emessa dalla superficie $i$ che incide sulla superficie $j$
Nel caso $i=j$:
- $F_{ij}=0$ per superfici piane e convesse
- $F_{ij}\neq0$ per superfici concave
Varia tra $0$ e $1$:
- $F_{ij}=0$ le due superfici non sono in vista tra loro
- $F_{ij}=1$ la superficie $j$ circonda la superficie $i$
4 relazioni fondamentali dei fattori di vista:
- Reciprocità
- Somma
- Sovrapposizione
- Simmetria
##### Reciprocità
$$A_iF_{ij}=A_jF_{ji}$$
##### Somma
La somma dei fattori di vista della superficie $i$ di una cavità verso tutte le superfici della cavità, essa stessa inclusa, è uguale a uno.
$$\sum_{j=1}^N F_{ij}=1$$
Numero di fattori di vista da calcolare in una cavità a $N$ superfici: $\frac{N(N-1)}{2}$
##### Sovrapposizione
Il fattore di vista tra una superficie $i$ e una superficie $j$ ($F_{ij}$) è uguale alla somma dei fattori di vista tra la superficie $i$ e le parti componenti la superficie $j$.
$$F_{i(jk)}=F_{ij}+F_{ik}$$
##### Simmetria
Due superfici simmetriche rispetto a una terza superficie avranno uguali fattori di vista verso quella superficie
### Trasmissione di calore per irraggiamento
##### Superfici nere
Due superfici nere a temperature $T_1$ e $T_2$:
$$\dot Q_{1\to2}=A_1E_{n1}F_{12}-A_2E_{n2}F_{21}$$
Applicando regola di reciprocità $A_1F_{12}=A_2F_{21}$:
$$\dot Q_{1\to2}=A_1F_{12}(E_{n1}-E_{n2})=A_1F_{12}\sigma(T_1^4-T_2^4)$$
In una cavità ad $N$ superfici:
$$\dot Q_i=\sum_{j=1}^N \dot Q_{i\to j}=\sum_{j=1}^N A_iF_{ij}\sigma(T_i^4-T_j^4)$$
##### Superfici grigie
Per semplificare si considerano le superfici in una cavità
- opache
- diffondenti
- grigie
- isoterme
- radiazione emessa e incidente su ciascuna sup. uniformi
### Radiosità
Somma della radiazione emessa e riflessa da una superficie.
Per una superficie grigia e opaca $J_i=\varepsilon_iE_{ni}+(1-\varepsilon_i)G_i$
In un corpo nero si approssima a $J_i=E_{ni}=\sigma^4T_i^4$
## Potenza termica netta da (o a) una superficie
$$\dot Q_i=A_i(J_i-G_i)=\frac{A_i\varepsilon_i}{1-\varepsilon_i}(E_{ni}-J_i)$$
Utilizzando l'analogia con legge di Ohm:
$$\dot Q_i=\frac{E_{ni}-J_i}{R_i}\hspace{1cm}R_i=\frac{1-\varepsilon_i}{A_i\varepsilon_i}$$
## Potenza termica tra due superfici
$$\dot Q_{i\to j}=A_iF_{ij}(J_{ij}-J_{ji})=\frac{J_{ij}-J_{ji}}{R_{ij}}$$
con $R_{ij}=\frac{1}{A_iF_{ij}}$ detta resistenza spaziale
