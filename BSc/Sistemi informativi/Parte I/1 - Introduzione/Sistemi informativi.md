Un sistema informativo è un insieme di procedure, metodi e strumenti dedicati allo svolgimento di alcune funzioni per il raggiungimento di un risultato.
> “Un sistema informativo è definito come l’insieme dei mezzi, della conoscenza organizzativa e delle competenze tecniche per gestire la [[Le organizzazioni#Risorsa|risorsa]] informazione”

![[Sistema informativo.png]]
# Classificazione sistemi informativi
Secondo la [[Le organizzazioni#Piramide di Anthony|piramide di Anthony]]:
- sistemi informativi **operazionali** per svolgere operazioni di base, quotidiane (es. gestione transazioni, contabilità...). Parti fondamentali sono il database e le funzioni operative.
- sistemi informativi **decisionali** per supportare le attività decisionali e strategiche aziendali
# Sistemi OLTP e OLAP
I sistemi informativi possono anche essere definiti come un insieme di applicazioni che interagiscono con basi di dati. Con il termine **transazione** in un sistema informativo ci si riferisce a una categoria ampia di concetti che comprende:
- Scambi o contratti interni o esterni all'azienda (es. invio ordine a fornitore, ricezione ordine di un cliente)
- Attività operative che contribuiscono alla produzione di beni o all'erogazione di servizi
- Movimentazioni di oggetti fisici interni (es. assemblaggio di una scheda elettronica) o esterni all'azienda (es. spedizione di un bene al cliente)
- Certificazione di eventi (es. pagamento fattura, inserimento nuovo prodotto a catalogo)
- Insieme di operazioni che modificano lo stato del database lasciandolo in uno stato consistente. (Transazioni [[Basi di dati/Introduzione|ACID]])
### OLAP
Un sistema OLAP (On Line Analytical Processing) è caratterizzato da poche transazioni e interrogazioni complesse che richiedono aggregazioni di grandi quantità di dati.
L'efficienza e l'efficacia di un sistema OLAP si misurano con il tempo di risposta.
Le proprietà *ACID* non sono rilevanti poiché le operazioni sono di sola lettura, gode invece delle proprietà FASMI:
- Fast: risposta alle richieste in temi rapidi
- Analytical: permette di effettuare analisi complesse
- Shared: più utenti con diversi permessi di accesso ai dati
- Multidimensional: visione multidimensionale dei dati
- Informational: i dati devono contenere tutte le informazioni di interesse

I sistemi OLAP sono idonei alla gestione di processi a livello strategico.
### OLTP
Un sistema OLTP (On Line Transaction Processing) tratta operazioni caratterizzate da molte transazioni brevi e online (CRUD). Sono focalizzati sulla rapidità delle query, sull'integrità dei dati in ambienti multi accesso e sul garantire efficacia ed efficienza del sistema misurabile in transazioni al secondo (throughput).
I sistemi OLTP sono idonei alla gestione di processi a livelli operativi e di controllo.
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
