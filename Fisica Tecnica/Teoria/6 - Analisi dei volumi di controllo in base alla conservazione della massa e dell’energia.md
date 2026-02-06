### Principio di conservazione della massa
a massa netta scambiata da un volume di controllo durante un intervallo di tempo $\Delta t$ è uguale alla variazione netta (aumento o diminuzione) della massa totale nel volume di controllo durante $\Delta t$.
$$m_\text{entrante}-m_\text{uscente}=\Delta m_{VC}\hspace{0.4cm}(kg)$$
$$\Delta m_{VC}=m_\text{finale}-m_\text{iniziale}$$
Se analizziamo per unità di tempo:
$$\dot m_\text{entrante}-\dot m_\text{uscente}=dm_{VC}/dt\hspace{0.4cm}(kg/s)$$
### Bilancio di massa per processi a flusso stazionario
In un processo a flusso stazionario la massa totale nel volume di controllo **non varia**, quindi la massa entrante deve eguagliare quella uscente.
#### Ugelli e diffusori
$$h_2=h_1+\Delta e_c=h_1+\frac{w_1^2-w_2^2}{2}$$
#### Compressori e turbine
(turbo)Compressore: $$\dot L_\text{entrante}=\dot Q_\text{uscente}+\dot m(h_2-h_1)$$
Turbina
Potenza uscente: $$\dot L_\text{uscente}=\dot m\left[(h_1-h_2)+\frac{w_1^2-w_2^2}{2}+g(z_2-z_1)\right]=-\dot m(\Delta h+\Delta e_c+\Delta e_p)$$
Lavoro specifico uscente:
$$l_\text{uscente}=\frac{\dot L_\text{uscente}}{\dot m}=-(\Delta h + \Delta e_c+\Delta e_p)$$
#### Valvole di laminazione
$$h_1\approx h_2\implies u_1+p_1v_1=u_2+p_2v_2$$
Entalpia costante.
Un gas perfetto non cambia temperatura in un processo di laminazione poiché $h=h(T)$
#### Camere di miscelazione
<center><img src="Camera di miscelazione.png" alt="drawing" width="250"/></center>

$$\dot m_1h_1+\dot m_2h_2=\dot m_3h_3$$

#### Scambiatori di calore
In uno scambiatore di calore il bilancio energetico dipende dalla scelta del volume di controllo
<center><img src="Miscelatore 1.png" width=250 /></center>

$$\dot m_\text{acqua}(h_1-h_2)=\dot m_\text{refr}(h_4-h_3)$$
---
<center><img src="Miscelatore 2.png" width=250/></center>

$$\dot Q_\text{R,entrante}=\dot m_\text{R}(h_2-h_1)$$
