## `#define`

- **Descrizione:** Definisce costanti o macro per semplificare il codice o migliorare la leggibilità.
    - Le costanti definite con `#define` non occupano memoria.
    - Non hanno tipo e vengono semplicemente sostituite dal preprocessore.
- **Esempi:**
```c
#define COSTANTE 10
#define DEBUG
#define SOMMA(x, y) ((x) + (y))

int main() {
	int valore = COSTANTE;
	int risultato = SOMMA(2, 3);
	printf("Valore: %d, Somma: %d\n", valore, risultato);
	#ifdef DEBUG
	printf("Modalità Debug Attiva\n");
	#endif
	return 0;
}
```
- In questo esempio, `COSTANTE` verrà sostituito con `10`, e `SOMMA(x, y)` con `((x) + (y))` dal preprocessore.
- Se `DEBUG` è definito, verrà stampato il messaggio di debug.
## `#include`

- **Descrizione:** Utilizzato per includere file di intestazione (header) nel codice sorgente.
    - `< >` viene utilizzato per includere librerie di sistema.
    - `" "` viene utilizzato per includere file definiti dall'utente.
- **Esempi:**
```c
#include <stdio.h>
// Libreria di sistema

#include "miofile.h"
// Header definito dall'utente
```
- `<stdio.h>` viene cercato nelle directory standard del compilatore.
- `"miofile.h"` viene cercato prima nella directory corrente e poi nelle directory standard.
## Direttive di Compilazione Condizionale
### `#ifdef`, `#ifndef`
- **Descrizione:**
    - `#ifdef`: Compila il blocco di codice solo se un identificatore è stato definito.
    - `#ifndef`: Compila il blocco solo se l'identificatore **non** è stato definito.
- **Esempi:**
```c
#define DEBUG

#ifdef DEBUG
printf("Debug attivo\n");
#endif

#ifndef RELEASE
printf("Modalità non di rilascio\n");
#endif
```    
- Se `DEBUG` è definito, viene stampato "Debug attivo".
- Se `RELEASE` non è definito, viene stampato "Modalità non di rilascio".
### `#if`, `#else`, `#elif`, `#endif`
- **Descrizione:** Consentono la compilazione condizionale in base a una condizione specifica.
    - `#if`: Verifica una condizione.
    - `#else`: Blocco alternativo se la condizione non è vera.
    - `#elif`: Verifica una nuova condizione se la precedente non era vera.
    - `#endif`: Termina il blocco condizionale.
- **Esempi:**
```c
#define VERSIONE 2

#if VERSIONE == 1
printf("Versione 1\n");
#elif VERSIONE == 2
printf("Versione 2\n");
#else
printf("Versione sconosciuta\n");
#endif
```
- Se `VERSIONE` è uguale a `1`, verrà stampato "Versione 1".
- Se `VERSIONE` è uguale a `2`, verrà stampato "Versione 2".
- In tutti gli altri casi, verrà stampato "Versione sconosciuta".
## Compilazione Condizionale con `gcc`
- **Descrizione:** È possibile definire macro direttamente durante la compilazione usando il flag `-D`.
- **Esempio:** `{bash} gcc file.c -DDEBUG`
	- Questo equivale a mettere `{c} #define DEBUG` all'inizio del file.
	- Utile per attivare o disattivare blocchi di codice durante la fase di compilazione, come i messaggi di debug.