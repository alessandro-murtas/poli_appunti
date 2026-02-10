Permette di astrarre le componenti fisiche di un elaboratore al fine di renderle disponibili in modalità software. Una CPU virtuale è un componente software che, dal punto di vista dell’utilizzatore, fornisce le capacità di elaborazione di una CPU fisica. La differenza sta nel fatto che chiedere l’esecuzione di un calcolo ad una CPU virtuale significa eseguire una chiamata ad una applicazione (la CPU virtuale), la quale trasformerà la chiamata alla CPU fisica ad essa associata.
Pro:
- Disaccoppiamento risorse fisiche e applicazione
- Risorsa fisica può essere frazionata in più risorse virtuali
- Condivisione risorsa fisica con applicazioni in maniera trasparente

Contro
- Degrado prestazioni
- Gestione complessa
- Gestione centralizzata

Macchina virtuale: insieme delle risorse virtuali necessarie al funzionamento di una applicazione / software che emula nodo fisico
### Hypervisor
L'hypervisor è lo strato software che gestisce la corrispondenza tra risorse reali (fisiche) e risorse virtuali. L’obiettivo dell’hypervisor è quello di rendere possibile l’esecuzione di una o più macchine virtuali offrendo alle applicazioni installate sopra di esse le risorse virtuali a loro assegnate.
- Bare metal: Installato direttamente su macchina fisica
- Hosted: Installato sopra l'SO della macchina fisica (host)