# Margine di fase
Conoscendo $G(s)$ e la sua pulsazione critica $\omega_c$ calcolo $\varphi_c=\arg G(j\omega_c)$ e trovo $\varphi_m=180\degree -|\arg G(j\omega_c)|$
Esempio:
$$G(s)=20\frac{(1+5s)}{s(1+s)^2}$$
Trovo la [[Pulsazione critica e guadagno|pulsazione critica]]:
$$\varphi_c=\arg G(j\omega_c)=-90\degree - 2\arctan(\omega_c)+\arctan(5\omega_c)$$
Quindi
$$\varphi_m=180\degree-\varphi_c$$
# Margine di guadagno
Pongo
$$\arg G(j\omega_\pi)=-180$$
e risolvo per $\omega_\pi$, quindi calcolo $k_m$:
$$k_m=|G(j\omega_\pi)|^{-1}=\frac{1}{|G(j\omega_\pi)|}$$