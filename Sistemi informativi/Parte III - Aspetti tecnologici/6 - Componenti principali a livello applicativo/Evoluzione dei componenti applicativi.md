![[Architettura applicazioni.png]]
Le applicazioni si possono strutturare secondo 3 livelli logici:
- Logica di presentazione (GUI/UI/Frontend)
- Logica applicativa
- Logica di accesso ai dati

Da un punto di vista architetturale, le applicazioni si dividono in:
- Applicazioni monolitiche: livelli logici contenuti all’interno di uno stesso software artifact
- Applicazioni distribuite: livelli logici scomposti su diversi software artifact che comunicano tra di loro. A sua volta divise in:
	- Sistemi chiusi: i singoli livelli logici sono progettati per comunicare soltanto con i livelli adiacenti
	- Sistemi aperti: ogni livello logico può anche comunicare con sistemi esterni (es. altri livelli logici di altre applicazioni).
Le applicazioni progettate secondo il modello distribuito sono più flessibili e scalabili.