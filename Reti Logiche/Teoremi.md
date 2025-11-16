## Teorema assorbimento
$$x+x\cdot y=x$$
$$x\cdot(x+y)=x$$
## Teorema del consenso
$$xy + \overline{x}z + yz = xy + \overline{x}z$$
### Dimostrazione
$$xy+\overline{x}z+yz=xy+\overline{x}z+yz\cdot1=xy+\overline{x}z+yz(x+\overline{x})=$$
$$=xy+\overline{x}z+xyz+\overline{x}yz=xy\cancel{(1+z)}+\overline{x}z\cancel{(1+y)}=xy+\overline{x}z$$
## Teorema di Shannon
$$f(x_1,x_2,...,x_n)=x_1f(1,x_2,...,x_n)+\overline{x_1}f(0,x_2,...,x_n)$$
### Dimostrazione
#### Caso 1: costante
$f(x_1, ..., x_n) = b$
$f(x_1, ..., x_n) =\overline{x_1}\cdot f(0,...,x_n)+x_1\cdot f(1,...,x_n)=\overline{x_1}\cdot b+x_1\cdot b=b\cdot(\overline{x_1}+x_1)=b\cdot 1=b$
#### Caso 2: variabile
$f(x_1, ..., x_n) = x_i$
##### Caso 2a: $x_i\neq x_1$
$f(x_1, ..., x_n) =\overline{x_1}\cdot f(0,...,x_n)+x_1\cdot f(1,...,x_n)=\overline{x_1}\cdot x_i+x_1\cdot x_i=x_i\cdot(\overline{x_1}+x_1)=x_i\cdot 1=x_i$
##### Caso 2b: $x_i=x_1$
$f(x_1, ..., x_n) =\overline{x_1}\cdot f(0,...,x_n)+x_1\cdot f(1,...,x_n)=\overline{x_1}\cdot 0+x_1\cdot 1=x_1=x_i$
#### Caso 3: $g+h; gh;\overline{g}$

## Teorema semplificazione
$$x+\overline{x}\cdot y=x+y$$
$$x\cdot (\overline{x}+y)=x\cdot y$$
## Teorema di de Morgan
$$\overline{A\cdot B}=\overline{A}+\overline{B}$$
$$\overline{A + B}=\overline{A}\cdot\overline{B}$$
### Dimostrazione
Per dimostrarlo uso Boole-Shannon