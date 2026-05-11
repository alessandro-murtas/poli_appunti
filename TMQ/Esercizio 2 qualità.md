
| Campione | 1° foro | 2° foro | 3° foro | $\bar x$ | $R$ |
| -------- | ------- | ------- | ------- | -------- | --- |
| 1        | 65      | -29     | 153     | 63.00    | 182 |
| 2        | -159    | -45     | 34      | -56.67   | 193 |
| 3        | -9      | 74      | 38      | 34.33    | 83  |
| 4        | 72      | -64     | 94      | 34.00    | 158 |
| 5        | -3      | -72     | 60      | -5.00    | 132 |
| 6        | -82     | -28     | 23      | -29.00   | 105 |
| 7        | 11      | -85     | -31     | -35.00   | 96  |
| 8        | 56      | -48     | 49      | 19.00    | 104 |
| 9        | 72      | 23      | -61     | 11.33    | 133 |
| 10       | 83      | -29     | -30     | 8.00     | 113 |
### 1. Progettare le carte $\bar X$ e $R$ (ipotizzando la normalità dei dati).
Quindi $\bar R=\frac{\sum R_i}{10}=129.9$ e $\bar{\bar x}=\frac{\sum \bar x_i}{10}=4.4$ 
Dalle tavole recupero le costanti per $n=3$:
- $A_2(3)=1.023$
- $D_3(3)=0$
- $D_4(3)=2.574$
#### Carta $\bar X$
$\text{LCS}=\bar {\bar x}+A_2(3)\bar R=137.29$ 
$\text{LC}=\bar{\bar x}=4.4$
$\text{LCI}=\bar {\bar x}-A_2(3)\bar R=-128.49$
#### Carta $R$
$\text{LCS}=D_4(3)\bar R=334.36$
$\text{LC}=\bar R=129.9$
$\text{LCI}=D_3(3)\bar R=0$
### 2. Stimare la deviazione standard del processo usando il metodo del range
$d_2(3)=1.693$
$\hat \sigma_0=\frac{\bar R}{d_2}=76.73$
### 3. Progettare la carta di controllo che si dovrà adottare se, in futuro, si pensa di adottare campioni di numerosità $n=10$
$d_2(10)=3.078$
$\bar R_\text{new}=\bar R_\text{old}\frac{d_2(10)}{d_2(3)}=236.17$
##### Carta $\bar X$
$\text{LCS}=\bar {\bar x}+A_2(10)\bar R_\text{new}=77.14$ 
$\text{LC}=\bar{\bar x}=4.4$
$\text{LCI}=\bar {\bar x}-A_2(10)\bar R_\text{new}=-68.34$
##### Carta $R$
$\text{LCS}=D_4(10)\bar R_\text{new}=419.67$
$\text{LC}=\bar R_\text{new}=236.17$
$\text{LCI}=D_3(10)\bar R_\text{new}=52.67$