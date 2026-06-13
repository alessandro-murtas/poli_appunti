## 1. Diodi e Circuiti RC (Transitori)

- **Modelli del Diodo (ON):** Nello stato di conduzione diretta, la tensione è pari alla tensione di soglia.$$V_{D}=V_{\gamma}$$
- **Modelli del Diodo (Breakdown/Zener):** Nello stato di polarizzazione inversa, la tensione si fissa al valore di breakdown.$$V_{D}=-|V_{Z}|$$
- **Equazione del transitorio RC:** Regola la carica o scarica della tensione sul condensatore partendo da un valore iniziale a un valore asintotico.$$v(t)=(v(0^+)-v(\infty))e^{-\frac{t}{\tau}}+v(\infty)$$
- **Costante di tempo:** Dove $R_{eq}$ è la resistenza equivalente vista ai capi del condensatore nella specifica configurazione circuitale.$$\tau=R_{eq}\cdot C$$
- **Potenza media dissipata:** Nel caso di segnali ad onda quadra, si esegue una media pesata sui tempi di accensione e breakdown.$$P=\frac{1}{T}(V_{ON}\cdot I_{ON}\cdot T_{ON}+V_{BD}\cdot I_{BD}\cdot T_{BD})$$
## 2. Transistori MOSFET e Reti Logiche CMOS
Componente con k maggiore (di molto) dovrebbe lavorare in ohmica.

- **Livelli logici (Pass Transistor nMOS):** Trasmette un livello logico alto "debole" decurtato della tensione di soglia.$$V_{H}=V_{DD}-V_{Tn}$$
- **Corrente in regione di Saturazione:** Legata alla tensione di overdrive; per i pMOS si usano i valori in modulo.$$I_{D,sat}=k_{n}(V_{GS}-V_{Tn})^2$$
- **Resistenza equivalente di canale (Zona Ohmica/Triodo):** Utilizzata per calcolare i tempi di transitorio scaricando i condensatori parassiti.$$R_{ON}=\frac{1}{2\cdot k_{n}(V_{GS}-V_{Tn})}$$
- **Transistori in serie:** Più MOSFET uguali connessi in serie si modellano come un unico transistore equivalente con parametro transconduttivo scalato.$$k_{eq}=\frac{k}{N_{serie}}$$
- **Calcolo dei tempi di propagazione:** Modello linearizzato basato sulla costante di tempo del circuito RC parassita.$$t_{p}=-\tau\cdot\ln\frac{V_{target}}{V_{start}}$$
- **Potenza Dinamica:** Consumo dovuto alla carica e scarica delle capacità di carico a una determinata frequenza $f$.$$P_{din}=f\cdot C_{L}\cdot(V_{H}-V_{L})\cdot V_{DD}$$
- **Potenza Statica:** Causata da eventuale cross-conduzione della porta logica.$$P_{S}=V_{DD}\cdot|I_{Dp,sat}|$$
## 3. Amplificatori Operazionali (OpAmp) e Stabilità
- **Impedenza condensatore**: sia $s=j\omega$
$$Z_c=\frac{1}{sC}$$

- **Polo in anello aperto e GBWP:** Il polo a bassa frequenza è legato al Prodotto Guadagno-Banda (GBWP) e al guadagno statico $A_{0}$.$$\tau_{p}=\frac{A_{0}}{GBWP}$$
- **Studio della Stabilità (Margine di Fase):** Calcolato alla frequenza di taglio dell'asse a 0 dB, valutando la fase del guadagno di anello $G_{loop}(j\omega)$.$$MF=360^{\circ}-180^{\circ}-\sum\arctan\left(\frac{f_{0dB}}{f_{polo}}\right)$$
## 4. Convertitori ADC/DAC e Sample & Hold

- **Risoluzione e Livello LSB:** Differenza di potenziale associata al bit meno significativo su una determinata dinamica di fondo scala.$$\Delta V_{LSB}=\frac{V_{FS}}{2^N}$$
- **Vincolo di Slew Rate (ADC senza Sample & Hold):** Condizione affinché l'errore non superi un LSB tra un colpo di clock e il successivo.$$\frac{V_{FS}}{2^N}\le\max\left(\frac{dv}{dt}\right)\cdot T_{CK}$$
- **Derivata massima per ingresso sinusoidale:** Dove $A_{0}$ è l'ampiezza del segnale e $f$ la sua frequenza.$$\max\left(\frac{dv}{dt}\right)=2\pi f A_{0}$$
- **Errore di Tracciamento (S&H):** La capacità di hold si carica attraverso lo switch MOSFET seguendo un andamento esponenziale con costante $\tau_{S}$.$$\epsilon(t)=\Delta V\cdot e^{-\frac{t}{\tau_{S}}}$$
- **Condizione di corretta acquisizione:** Si impone che l'errore di tensione al termine della fase di sample sia inferiore alla sensibilità dell'ADC.$$\epsilon(t_{sample})\le\frac{\Delta V_{LSB}}{2}$$