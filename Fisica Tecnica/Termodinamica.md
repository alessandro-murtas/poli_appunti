## Trasformazioni

| Tipo        |         $W$         |      $Q$       |   $\Delta U$   |                         Costanti                          |   $n$    |
| ----------- | :-----------------: | :------------: | :------------: | :-------------------------------------------------------: | :------: |
| Politropica |                     |                |                |                          $pV^n$                           |   $n$    |
| Isocora     |          0          | $nc_v\Delta T$ |      $Q$       |                       $\frac{p}{T}$                       | $\infty$ |
| Isobara     |     $p\Delta V$     | $nc_p\Delta T$ | $nc_v\Delta T$ |                       $\frac{V}{T}$                       |   $0$    |
| Isoterma    | $nRT\ln{(V_f/V_i)}$ |      $W$       |       0        |                           $pV$                            |   $1$    |
| Adiabatica  |     $-\Delta U$     |       0        | $nc_v\Delta T$ | $pV^\gamma , Tp^{\frac{1-\gamma}{\gamma}}, TV^{\gamma-1}$ | $\gamma$ |
Equazione di stato dei gas perfetti: $pV=nRT$
Energia: $U=nc_vT\implies \Delta U = nc_v\Delta T$
Primo principio della termodinamica: $\Delta U = Q-W$
Costante dei gas perfetti: $R=8.314 \frac{J}{mol\cdot K}$
Costante specifica del gas: $R^*=R/M$ ($\frac{J}{kg\cdot K}$)
Relazione di Meyer: $R=c_p-c_v$
Costante gamma: $\gamma=\frac{c_p}{c_v}$
Calore specifico molare in gas monoatomici: $c_v=\frac{3}{2}R$, $c_p=\frac{5}{2}R$, $\gamma=\frac{5}{3}$
Calore specifico molare in gas biatomici: $c_v=\frac{5}{2}R$, $c_p=\frac{7}{2}R$, $\gamma=\frac{7}{5}$
Lavoro: $$W_{AB}=\int_A^B p(V)dv$$
Variazione entropia: $$\Delta S_{AB}=nc_p\ln{\left(\frac{T_B}{T_A}\right)}-nR\ln{\left(\frac{p_B}{p_A}\right)}=nc_v\ln{\left(\frac{T_B}{T_A}\right)}+nR\ln{\left(\frac{V_B}{V_A}\right)}$$
Variazione entropia specifica:
$$\Delta s_{AB}=\frac{\Delta S_{AB}}{n}=c_p\ln{\left(\frac{T_B}{T_A}\right)}-R\ln{\left(\frac{p_B}{p_A}\right)}=c_v\ln{\left(\frac{T_B}{T_A}\right)}+R\ln{\left(\frac{V_B}{V_A}\right)}$$
## Macchine e cicli
In un ciclo l'energia interna rimane costante: $A = B \implies \Delta U= 0$
Macchina termica
Lavoro: $W = Q_A-|Q_C|$ 
Rendimento: $\eta =\frac{W}{Q_A}=1-\frac{|Q_C|}{Q_A}$ 
Il rendimento in linea generale aumenta all'aumentare della differenza di temperatura in ingresso e in uscita.
### Ciclo di Carnot
Composto da:
- Espansione isoterma (non varia temperatura)
- Espansione isoentropica (non varia entropia)
- Compressione isoterma
- Compressione isoentropica
Rendimento: $\eta_\text{Carnot}=1-\frac{T_i}{T_s}$
Coefficiente di prestazione: $COP=\frac{T_i}{T_i-T_s}$
<center><img src="Ciclo Carnot pv.png" height=200>  <img src="Ciclo Carnot ts.png" height=200></center>
### Ciclo Otto
1. Compressione isoentropica
2. Trasformazione isocora
3. Espansione isoentropica
4. Trasformazione isocora
Rapporto di compressione: $r=\frac{V_\text{max}}{V_\text{min}}$
Rendimento: $\eta_\text{Otto}=1-\frac{1}{r^{k-1}}$
<center><img src="Ciclo Otto pv.png" height=200>  <img src="Ciclo Otto ts.png" height=200></center>
### Ciclo Diesel
1. Compressione isoentropica
2. Espansione isobara
3. Espansione isoentropica
4. Trasformazione isocora
<center><img src="Ciclo Diesel pv.png" height=200>  <img src="Ciclo Diesel ts.png" height=200></center>
### Ciclo Joule-Brayton
1. Compressione isoentropica
2. Espansione isobara
3. Espansione isoentropica
4. Compressione isobara
Rapporto manometrico di compressione: $\beta=\frac{p_2}{p_1}$
Coefficiente dilatazione adiabatica: $k=\frac{c_p}{c_v}$
Rendimento: $\eta_\text{Brayton}=1-\frac{1}{\beta^{(k-1)/k}}$
Rendimento massimo per $\beta=(T_\text{max}-T_\text{min})^{k/[2(k-1)]}$
<center><img src="Ciclo Brayton pv.png" height=200>  <img src="Ciclo Brayton ts.png" height=200></center>
### Ciclo di Rankine
<center><img src="Ciclo Rankine ts.png" height=200></center>
### Macchine frigorifere e pompe di calore