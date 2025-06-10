Serve per risolvere ricorrenze della forma:
$$T(n)=a⋅T(n/b)+f(n)$$
Confronto quindi: $$f(n)$$e $$n^{log_ba}$$E ci sono 3 casi:
1. $f(n)$ è di ordine inferiore: $$T(n)=\Theta(n^{log_ba})$$
2. Sono dello stesso ordine:$$T(n)=\Theta(n^{\log_b​a}\cdot \log n)$$
3. $f(n)$ è di ordine superiore: $$T(n)=\Theta(f(n))$$
