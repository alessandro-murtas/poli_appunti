$\overline{A+B}=\overline{A}\cdot\overline{B}$
## Forma duale
La forma duale di un'espressione booleana si ottiene scambiando gli operatori $+$ (OR) con $\cdot$ (AND) e i valori `0` con `1`. Il principio di dualità afferma che se un'espressione è valida in algebra booleana, anche la sua forma duale è valida. L'operatore di negazione $\overline{}$ (`NOT`) rimane invariato durante questa trasformazione.
Esempio:
$$(x+y)(\overline{x}+z)(y+z)=(x+y)(\overline{x}+z)$$
Diventa
$$xy+\overline{x}z+yz=xy+\overline{x}z$$
## Implicante
Se $P$ è implicante di $f(x_1,...,x_n)$ allora $$P\cdot \overline{f(x_1,...,x_n)} = 0$$