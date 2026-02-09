Verticale:
- Aumento capacità di ogni nodo (nodo più potente)
- Aumento prestazioni non lineare

Orizzontale:
- Aumento numero nodi
- Upgrade complesso
- Downsizing

#### Availability
Grado di funzionamento e accessibilità del sistema o componente quando è necessario per l'uso
$$\text{Availability}=\frac{\text{Uptime}}{\text{Uptime}+\text{Downtime}}$$
Aumentabile
- Distribuendo applicazione su più nodi (costoso)
- Con ridondanza (costoso)
### Server farm
Insieme di macchine che condividono carico elaborativo, secondo due principi progettuali:
- *Cloning*: sui server vengono installate le stesse applicazioni software ed i medesimi dati
- *Partitioning*: duplicazione dell’hardware per ripartire l’esecuzione dell’applicazione tra i nodi, partizionando anche i dati. (ogni nodo svolge funzione diversa)
#### RACS
Reliable Array of Cloned Services, ogni nodo implementa stesso insieme di funzionalità.
Maggiore scalabilità e tolleranza ai guasti.
Due configurazioni:
- Shared nothing: ogni clone ha il suo disco fisso con la copia dei dati, buono per applicazioni che operano in sola lettura, non buono per operazioni write intensive poiché ogni aggiornamento dei dati va fatto su ogni disco
- Shared disk (cluster): i cloni condividono server di memorizzazione che gestisce dischi fissi
### RAPS
Reliable Array of Partitioned Services, si ottiene clonando la stessa partizione ottenendo dei *pack* per risolvere il problema della *graceful degradation* che avviene quando una partizione risulta inaccessibile rendendo alcuni servizi inutilizzabili.