Macchina virtuale:
- Software che emula nodo fisico
- Hypervisor

Pro:
- Disaccoppiamento risorse fisiche e applicazione
- Risorsa fisica può essere frazionata in più risorse virtuali
- Condivisione risorsa fisica con applicazioni in maniera trasparente

Contro
- Degrado prestazioni
- Gestione complessa
- Gestione centralizzata
### Hypervisor
L'hypervisor è lo strato software che gestisce la corrispondenza tra risorse reali (fisiche) e risorse virtuali. L’obiettivo dell’hypervisor è quello di rendere possibile l’esecuzione di una o più macchine virtuali offrendo alle applicazioni installate sopra di esse le risorse virtuali a loro assegnate.
- Bare metal: Installato direttamente su macchina fisica
- Hosted: Installato sopra l'SO della macchina fisica (host)