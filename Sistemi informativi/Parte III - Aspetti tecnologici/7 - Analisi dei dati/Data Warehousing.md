### Data Warehouse
Un data warehouse è un sistema [[1 - Introduzione#OLAP|OLAP]], si distingue così da un normale DBMS che è un [[1 - Introduzione#OLTP|OLTP]].
Il DW è quindi una base di dati che raccoglie dati sintetici, integrati e strutturati e di tipo storico di interesse per un'organizzazione.
È definito anche come l'insieme di tutte le operazioni atte alla popolazione del db, al suo mantenimento, e tutte le tecniche di interrogazione che permettono di estrarre le informazioni dal db direzionale.
Un DW gode delle seguenti caratteristiche:
- Orientato alle entità: considera le principali entità di analisi. (ad esempio vendite, ordini, prodotti...)
- Integrato: i dati vengono sia da fonti interne che da fonti esterne all'azienda. Vanno quindi resi consistenti e integrati.
- Variabile nel tempo: un dw memorizza dati storici. A ogni dato inserito è associato un'etichetta temporale che identifica il periodo di riferimento.
- Persistente: una volta inseriti i dati tipicamente non vengono più modificati.
### Architettura di un DW
### ETL