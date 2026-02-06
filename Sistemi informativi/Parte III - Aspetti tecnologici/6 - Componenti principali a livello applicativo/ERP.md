L'ERP (Enterprise Resource Planning) è una suite software con moduli a supporto del sistema operazionale e delle transazioni interne all'organizzazione finalizzate alla gestione dell'impresa. Un sistema ERP copre interamente la [[Le organizzazioni#Catena del valore di Porter|catena del valore di Porter]].
## Proprietà
- *Unicità dell'informazione*: solo una rappresentazione logica dei dati valida per ogni modulo all’interno dell’ERP. Tutti i moduli vedono gli stessi valori: si risolvono in questo modo i problemi di ridondanza e incongruenza dei dati.
- *Modularità*: la suite è composta da moduli autosufficienti che possono essere acquisiti e integrati in modo incrementale. La modularità abilita nuove strategie di acquisizione dei COTS:
	- *One stop shopping*: tutti i moduli vengono acquistati da un singolo fornitore
	- *Best of Breed*: i moduli vengono comprati da fornitori diversi (interoperabilità non è garantita, sforzo di integrazione necessario)
- *Prescrittività*: questi prodotti incorporano la logica di funzionamento dell'impresa, codificata anche nelle business rules. È l'azienda che si adatta al software e non viceversa. Solitamente è un vantaggio per l'azienda poiché la logica incorporata viene progettata ispirandosi alle best practices del settore o a processi ben noti e ottimizzati.
## Funzionalità
I moduli di un ERP si possono dividere in:
- Istituzionali (orizzontali)
	- Gestione risorse umane
	- Gestione amministrativa
	- Gestione progetti e contabilità investimenti
- Settoriali o attività primarie (verticali):
	- Logistica (ingresso e uscita)
	- Pianificazione risorse
	- Acquisti
	- Gestione produzione
	- Vendite
- Direzionali (orizzontali)
	- Pianificazione strategica
	- Controllo budgetario
	- ABC (Activity Based Costing)
	- Balance scorecard
	- Cruscotti direzionali
Questi moduli compongono l'ERP core. Nell'ERP esteso troviamo i portali aziendali e i sistemi di interazione:
- SCM - Supply Chain Management: software per la gestione della supply chain che fornisce informazioni a supporto delle decisioni di acquisto e scheduling della produzione.
- [[CRM|CRM - Customer Relationship Management]]: supporta l'interazione con il cliente, dal contatto al post vendita, per fornire servizi avanzati per fidelizzarlo e aumentare la soddisfazione.
- PLM - Product Lifecycle Management: gestisce i prodotti seguendoli lungo il loro ciclo di vita, dalla loro ideazione alla realizzazione.
Possono far parte della suite ERP o essere acquisiti da altri fornitori.
## Aspetti architetturali
![[Evoluzione architettura.png]]
L'evoluzione architetturale degli ERP ha portato a una diminuzione dei costi di gestione e acquisizione grazie a:
- Esternalizzazione
- Adozione logica a servizi riduce costi per il vendor
- Tariffazione a consumo (costo di solito minore del tradizionale costo di acquisizione)
## Implementazione
ERP vengono sviluppati per insieme di imprese dello stesso settore *merceologico* (dominio applicativo). Quindi esistono diverse suite per diversi settori: i moduli delle suite per imprese manifatturiere ricalcano le funzionalità della [[Le organizzazioni#Catena del valore di Porter|catena del valore di Porter]] ma alcune industrie (es. siderurgiche) seguono un modello leggermente diverso e perciò la suite software sarà composta da moduli diversi.
Anche se ERP sono verticalizzati su settore, aziende hanno esigenze diverse, per questo motivo software possono essere configurati in 2 passaggi:
1. Parametrizzazione: abilitazione o disabilitazione funzionalità, settaggio parametri o selezione versione specifica di funzione
2. Personalizzazione (opzionale): modifiche al codice laddove parametrizzazione non è sufficiente
## Benefici
Vantaggi di efficienza legati al risparmio di tempi e di costi su attività operative grazie all'automazione e l'integrazione delle procedure.
Vantaggi di efficacia legati all'unicità dei dati, alla capacità di elaborare e veicolare le informazioni e alla standardizzazione delle piattaforme IT.