### Data Warehouse
Un data warehouse è un sistema [[Sistemi informativi#OLAP|OLAP]], si distingue così da un normale DBMS che è un [[Sistemi informativi#OLTP|OLTP]].
Il DW è quindi una base di dati che raccoglie dati sintetici, integrati e strutturati e di tipo storico di interesse per un'organizzazione.
È definito anche come l'insieme di tutte le operazioni atte alla popolazione del db, al suo mantenimento, e tutte le tecniche di interrogazione che permettono di estrarre le informazioni dal db direzionale.
Un DW gode delle seguenti caratteristiche:
- Orientato alle entità: considera le principali entità di analisi. (ad esempio vendite, ordini, prodotti...)
- Integrato: i dati vengono sia da fonti interne che da fonti esterne all'azienda. Vanno quindi resi consistenti e integrati.
- Variabile nel tempo: un DW memorizza dati storici. A ogni dato inserito è associato un'etichetta temporale che identifica il periodo di riferimento.
- Persistente: una volta inseriti i dati tipicamente non vengono più modificati.
### Architettura di un DW
### ETL
Procedimento per caricare i dati in un DW, composto da 3 passaggi:
1. Extraction
	1. Definisce quali dati vanno esaminati
	2. Statica (carica tutto) o incrementale (caricati solo dati aggiunti/modificati dall'ultima volta)
2. Transformation
	1. Modifica dati analizzati
	2. Pulizia
	3. Riconciliazione
	4. Standardizzazione formati
		1. Congiunzione/spezzettamento: es. divido l'indirizzo in via, città, provincia o viceversa li aggrego in un solo campo
		2. Standardizzazione codici classificazione
		3. Standardizzazione formato dati
	5. Eliminazione duplicati
3. Loading
	1. Caricamento dati nel DW
### Metadati
Nel processo di ETL vengono generati metadati che riguardano:
- Struttura del DW
- Metadati operazionali: storia e fonte dei dati
- Mappatura: trasformazioni subite
- Statistiche d'uso del DW
### Modello concettuale
DFM: Dimensional Fact Model
### Modelli logici
##### MOLAP
Supporto nativo per dati multidimensionali
##### ROLAP
OLAP relazionale, uso modello logico-relazionale per supportare multi-dimensionalità
Stella o fiocco di neve
##### HOLAP
Usa ROLAP per DW e MOLAP per datamart
### Operazioni
Operazioni di aggregazione:
- Roll up: comprimo
- Drill down: espando
Operazioni di filtraggio:
- Slice (1 coordinata fissata)
- Dice (2 o più coordinate fissate)
### Ciclo di vita
Progettazione iterativa, si parte dal **fatto** e si modella ipercubo