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