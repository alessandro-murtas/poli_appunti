## Modificatori di Memoria
### extern
- **Descrizione:** Indica che la variabile è definita in un altro file.
- **Uso tipico:**
    - Quando una variabile deve essere utilizzata in più file, si dichiara con `extern` nell'header e si include l'header nei file in cui serve.
    - Esempio:
```c:header.h
extern int variabileCondivisa;
```
```c:file1.c
#include "header.h"

int variabileCondivisa = 10;
```
```c:file2.c
#include "header.h"

printf("%d", variabileCondivisa);
```
### static
- **Descrizione:**
	- Globale: Definisce una variabile globale che non finisce nella tabella dei simboli, impedendo la modifica da altri file.
    - Locale: Usato anche all'interno di una funzione per dichiarare una variabile che viene inizializzata solo la prima volta e mantiene il valore tra le chiamate della funzione.
- **Nota:** Una variabile `static` all'interno di una funzione deve essere inizializzata.
- **Esempio:**
```c
// Variabile globale visibile solo in questo file
static int contatoreGlobale = 0;

void funzione() {
	// Variabile locale che mantiene il valore tra le chiamate
	static int contatore = 0;
	contatore++;
	printf("%d\n", contatore); 
}
```
### auto
- **Descrizione:**
    - Dichiarazione di variabili automatiche, ovvero memorizzate dove decide il compilatore.
    - **Nota:** Non viene più utilizzato perché il compilatore lo gestisce automaticamente.
- **Esempio:**
```c
void funzione() {
	auto int x = 10;
	// Ridondante, è già "auto" di default
}
```
### register
- **Descrizione:**
    - Suggerisce al compilatore di memorizzare la variabile in un registro della CPU per l'accesso rapido.
    - **Nota:** Non viene più utilizzato perché il compilatore ottimizza automaticamente l'uso dei registri.
- **Esempio:**
```c
void funzione() {
	register int i = 0;
}
```
### volatile
- **Descrizione:**
    - Utilizzato nei sistemi embedded o nei driver per indicare che il valore della variabile può cambiare in modo imprevedibile (es. per effetto di hardware esterno).
    - **Uso tipico:** In variabili condivise tra codice principale e interrupt handler.
- **Esempio:**
```c
volatile int statoSensore;
```
## Modificatori di Dimensione
### short, long, long long
- **Descrizione:** Modificano la dimensione dei tipi di dato (se si desidera ottenere un numero di byte esatto in modo consistente su ogni architettura è consigliato utilizzare i tipi definiti in `stdint.h`.
    - `short`: Solitamente 2 byte (16 bit)
    - `long`: Solitamente 4 byte (32 bit)
    - `long long`: Solitamente 8 byte (64 bit)
- **Esempio:**
```c
short int piccoloNumero;
long int grandeNumero;
long long int grandissimoNumero;

// Alternativa migliore
#include <stdint.h>

uint8_t intero_unsigned_8_bit;
int64_t intero_64_bit;
```
## Modificatori di "signedness"
### signed e unsigned
- **Descrizione:** Modificano la modalità di rappresentazione dei numeri interi.
    - `signed`: Include numeri negativi e positivi.
    - `unsigned`: Solo numeri positivi (raddoppia il range positivo).
- **Esempio:**
```c
unsigned int positivo;
signed int positivoENegativo;
```