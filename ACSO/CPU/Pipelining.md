## Fetch
- Il **Program Counter (PC)** punta all'indirizzo dell’istruzione da eseguire.
- L’istruzione viene letta dalla memoria e salvata in un registro interno.
- Poi il PC viene aggiornato per puntare all’istruzione successiva.
## Decode
- Viene analizzato l'opcode dell'istruzione per capire cosa deve fare (es. somma, salto, caricamento...).
- Si leggono i registri sorgente (rs1, rs2 se presenti).
- Si prepara anche l’immediato (valore costante) se serve.
- Viene impostato il percorso dei dati (control signals).
## Execute
Al termine della execute ho disponibile il risultato che se è presente percorso di propagazione posso già usare nella prossima istruzione
Operazioni eseguite:
- Se è un’operazione aritmetica, viene eseguita (es: somma, AND...).
- Se è un load/store, si calcola l’indirizzo di memoria.
- Se è un branch (salto condizionato), si valuta la condizione.
## Memory
- Se è un `load`, si legge dalla memoria all’indirizzo calcolato.
- Se è un `store`, si scrive nella memoria.
- Le istruzioni che **non accedono alla memoria** (es: add, sub) passano senza fare nulla.
## Write-back
- Il risultato dell'ALU o del dato letto da memoria viene scritto nel registro di destinazione (rd).
- È l’ultima fase, dopo di che il ciclo riparte con la prossima istruzione.

F/D
D/EX
EX/MEM