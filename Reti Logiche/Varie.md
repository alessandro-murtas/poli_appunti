### Complementi
$$-x=x_{c2}=x_{c1}+1$$
## Forma duale
La forma duale di un'espressione booleana si ottiene scambiando gli operatori $+$ (OR) con $\cdot$ (AND) e i valori `0` con `1`. Il principio di dualità afferma che se un'espressione è valida in algebra booleana, anche la sua forma duale è valida. L'operatore di negazione $\overline{}$ (`NOT`) rimane invariato durante questa trasformazione.
Esempio:
$$(x+y)(\overline{x}+z)(y+z)=(x+y)(\overline{x}+z)$$
Diventa
$$xy+\overline{x}z+yz=xy+\overline{x}z$$
## Forma standard
Una formula è in forma standard se è un prodotto di somme o una somma di prodotti
## Implicante
Se $P$ è implicante di $f(x_1,...,x_n)$ allora $$P\cdot \overline{f(x_1,...,x_n)} = 0$$
## Funzione maxtermine e mintermine
Una funzione **maxtermine** ( o anche _termine-somma_, o _s-termine_ ) è una funzione booleana che assume il valore 0 per una ed una sola combinazione di input.
Analogamente una funzione mintermine è una funzione booleana che assume il valore 1 per una ed una sola combinazione di input.
Per ricavare i mintermini di una funzione scrivo i termini come numeri binari, ad esempio:
$f(x,y,z)=x\overline{y}+xyz+z$
Posso scrivere
$x\overline{y}=10-=100,101=4,5$
$xyz=111=7$
$z=--1=001,011,101,111=1,3,5,7$
Quindi i mintermini di $f$ sono $1,3,4,5,7$ e posso scrivere $F=\overline{2}(1,3,4,5,7)$
