FA: frequenza assoluta
FR: frequenza relativa
FRC: frequenza relativa cumulata è la somma delle precedenti frequenze relative
FAC: frequenza assoluta cumulata è la somma delle precedenti frequenze assolute
Mediana: valore in posizione media (se cade su 2 valori faccio media tra i 2)
Quartile: valore in posizione 1/4 o 3/4, che sono rispettivamente il primo e il terzo quartile (il secondo è la mediana)
$Q_1 = \frac{n+1}{4}$, $Q_2=m=\frac{n+1}{2}$, $Q_3=\frac{3(n+1)}{4}$
Da capire come cristo si arrotondano, anche se sembra che $Q_1$ si arrotondi per eccesso mentre $Q_3$ si arrotonda per difetto, mentre $Q_2$ (la mediana) si fa la media tra i 2 valori
IQR: scarto interquartile, ovvero la differenza tra il terzo e il primo quartile
Media: $\mu$
Popolazione: $N$
Deviazione standard (scarto quadratico medio): $\sigma = \sqrt{\frac{\sum(x_i-\mu)^2}{N}}$
Valori erratici:$x$ è un valore erratico se $x < Q_1 - 1.5\cdot\text{IQR} \lor x > Q_3 + 1.5\cdot\text{IQR}$
Densità: $d = \frac{FR}{\text{ampiezza classe}}$ 
Numero di classi adeguato per istogramma: $\sqrt{N}$ oppure $1 + \log_2{N}$
Calcolo approssimativo quartili:
$$Q_1 = \text{est. inf.} + \frac{(0.25-\text{FRC classe prec.})(\text{est. sup.}-\text{est. inf.})}{\text{FR classe quartile}}$$
$$Q_3 = \text{est. inf.} + \frac{(0.75-\text{FRC classe prec.})(\text{est. sup.}-\text{est. inf.})}{\text{FR classe quartile}}$$
Calcolo approssimativo media:
$$\overline{X}_n=\sum_{i=1}^n\frac{(\text{est. sup.}+\text{est. inf.})_i}{2}\cdot\text{FR}_i$$