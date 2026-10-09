### Integrazione dei dati
I dati devono risiedere in un’unica sorgente condivisa.
##### Unificazione DB
Una prima soluzione è quella di ripensare interamente il [[Sistemi informativi|sistema informativo]] e sostituirlo con uno che permette di avere un unico database condiviso.
Soluzione radicale e difficile da adottare poiché aziende difficilmente rinunciano a applicativi funzionanti e affidabili o per questioni di costo.
Rimane comunque l'obiettivo verso cui si deve tendere.
##### Middleware
Un'altra soluzione infatti prevede di utilizzare uno strato software detto middleware che permette di mantenere consistenti i dati memorizzati sui vari DB.
Il middleware (come l'[[Data Warehousing#ETL|ETL]]) supporta dati in formati e semantiche diversi in termini di
- Rappresentazione: campi divisi in più campi (es. indirizzo diviso in più parti o no)
- Struttura: stessa rappresentazione ma campi ordinati in modo diverso
- Presentazione: dato presentato in formati diversi (es. lunghezza massima stringa del cognome)

Una semantica diversa invece riguarda il significato attribuito al dato (prezzo in Euro o Dollari)
### Integrazione logica applicativa
Le applicazioni possono comunicare tra di loro, fattibilità dipende da architettura software:
- di tipo aperto: facile integrazione
- di tipo chiuso: modifiche pesanti

Modelli integrazione:
- Punto a punto
- Hub-and-spoke
- Business Process Management System (BPMS)
- Modello a servizi