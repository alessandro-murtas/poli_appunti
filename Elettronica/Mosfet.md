![[NMOS.png]]
# NMOS
NMOS acceso quando $V_{GS} > V_{Tn}$ .
NMOS acceso si può trovare in 2 stati:
* Zona di saturazione quando $V_{DS} > V_{GS}-V_{Tn}$: $I_{Ds}=k_n\cdot (V_{GS}-V_{Tn})^2$
* Regione ohmica (Triodo) si comporta come un resistore: $I_{Ds}=k_n\left[2(V_{GS}-V_{Tn})V_{DS}-V_{DS}^2\right]$
Nella regione ohmica si può usare approssimazione
# PMOS
PMOS acceso quando $V_{GS}<V_{Tp}$ .
PMOS acceso si può trovare in 2 stati:
* Zona di saturazione quando $V_{DS} > V_{GS}-V_{Tp}$: $I_{Ds}=k_p\cdot (V_{GS}-V_{Tp})^2$
* Regione ohmica (Triodo) si comporta come un resistore: $I_{SD}=k_p\left[2(V_{GS}-V_{Tp})V_{SD}-V_{SD}^2\right]$
Nella regione ohmica si può usare approssimazione

## Tempo propagazione porta logica
Il tempo di propagazione $t_p$ della porta logica è definito come il tempo necessario a raggiungere il valore medio tra le tensioni dei valori logici di uscita.