# Fisica Tecnica - Progetto LaTeX

Questo progetto unifica tutti i markdown di `Fisica Tecnica` in un documento LaTeX unico, mantenendo i capitoli in file separati.

## Struttura
- `main.tex`: file principale
- `chapters/`: capitoli convertiti (`.tex`), uno per markdown
- `images/`: immagini copiate dal corso

## Compilazione
Da `latex_project/`:

```bash
pdflatex main.tex
pdflatex main.tex
```

Se disponibile, puoi usare anche:

```bash
latexmk -pdf main.tex
```
