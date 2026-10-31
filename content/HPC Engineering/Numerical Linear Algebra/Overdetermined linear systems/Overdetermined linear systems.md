### Linear regression
$$
L(T)=alpha_0+alpha_1T
$$
In linear regression I have only 2 degrees of freedom ($alpha_0, alpha_1$) and as $m$ constraints as many are the points I have in my data.
$$
A=mat(delim: "[", 1, T_1;1, T_2; .,.;.,.; 1, T_n), b=mat(delim: "[", L_1;L_2;.;.;L_n)
$$
Error equation: $e_i=(alpha_0+alpha_i T_i - L_i)^2$
I want to find $(alpha_0, alpha_1)$ s.t. 
$$
min_((alpha_0, alpha_i)) sum_(i=1)^m (e_i)^2
$$
### Polynomial regression
$$
L(T)=alpha_0+alpha_1T+alpha_2T^2
$$