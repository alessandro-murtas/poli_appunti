$$f \sim \frac{a_0}{2} + \sum_{n=1}^{+\infty}\left[a_ncos\left(\frac{2\pi n}{T}x\right)+b_ncos\left(\frac{2\pi n}{T}x\right)\right]$$
Sia $n \geq 1$ 
- $a_0 = \frac{2}{T}\displaystyle\int_{T}f(x)dx$
- $a_n = \frac{2}{T}\displaystyle\int_{T}f(x)cos\left(\frac{2\pi n}{T}x\right)dx$
- $b_n = \frac{2}{T}\displaystyle\int_{T}f(x)sin\left(\frac{2\pi n}{T}x\right)dx$
## Uguaglianza di Parseval
$$\frac{2}{T}\int_T|f(x)|^2dx=\frac{a_0^2}{2}+\sum_{n=1}^{+\infty}(a_n^2+b_n^2)$$