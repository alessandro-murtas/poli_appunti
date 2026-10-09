### Priority encoder
Può essere utilizzato per calcolare logaritmo in base 2.
Genera segnale di errore se l'input è 0.
### Decoder
Può essere usato per calcolare potenze di 2

| J   | K   | Q*        |
| --- | --- | --------- |
| 0   | 0   | Q         |
| 0   | 1   | 0         |
| 1   | 0   | 1         |
| 1   | 1   | $\over Q$ |

| S   | R   | Q*  |
| --- | --- | --- |
| 0   | 0   | Q   |
| 0   | 1   | 0   |
| 1   | 0   | 1   |
| /   | 1   | /   |

| Q*  | D   |
| --- | --- |
| 0   | 0   |
| 1   | 1   |

| Q*        | T   |
| --------- | --- |
| Q         | 0   |
| $\over Q$ | 1   |
