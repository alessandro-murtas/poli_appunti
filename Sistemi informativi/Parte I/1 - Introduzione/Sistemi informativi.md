Un sistema informativo è un insieme di procedure, metodi e strumenti dedicati allo svolgimento di alcune funzioni per il raggiungimento di un risultato.
> “Un sistema informativo è definito come l’insieme dei mezzi, della conoscenza organizzativa e delle competenze tecniche per gestire la risorsa informazione”

![[Sistema informativo.png]]
### OLAP
Un sistema OLAP (On Line Analytical Processing) è caratterizzato da poche transazioni e interrogazioni complesse che richiedono aggregazioni di grandi quantità di dati.
L'efficienza e l'efficacia di un sistema OLAP si misurano con il tempo di risposta.
Le proprietà [[Introduzione|ACID]] non sono rilevanti poiché le operazioni sono di sola lettura, gode invece delle proprietà FASMI:
- Fast: risposta alle richieste in temi rapidi
- Analytical: permette di effettuare analisi complesse
- Shared: più utenti con diversi permessi di accesso ai dati
- Multidimensional: visione multidimensionale dei dati
- Informational: i dati devono contenere tutte le informazioni di interesse
### OLTP
Un sistema OLTP (On Line Transaction Processing)

## Confronto

|                 | OLTP                                                     | OLAP                                              |
| --------------- | -------------------------------------------------------- | ------------------------------------------------- |
| Utente          | Impiegato (molti)                                        | Dirigente (pochi)                                 |
| Funzione        | Operazioni giornaliere                                   | Supporto alle decisioni                           |
| Progettazione   | Orientata all'applicazione                               | Orientata al soggetto                             |
| Dati            | Correnti, aggiornati, dettagliati, relazionali, omogenei | Storici, aggregati, multidimensionali, eterogenei |
| Uso             | Ripetitivo                                               | Casuale                                           |
| Accesso         | Lettura/Scrittura, indicizzato                           | Lettura, sequenziale                              |
| Unità di lavoro | Transazione breve (CRUD)                                 | Interrogazione complessa                          |
| Metrica         | Throughput                                               | Tempo di risposta                                 |
