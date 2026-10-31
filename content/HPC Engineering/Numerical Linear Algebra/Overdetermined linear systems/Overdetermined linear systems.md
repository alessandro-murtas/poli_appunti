### Linear regression
$$
L(T)=alpha_0+alpha_1T
$$
In linear regression I have only 2 degrees of freedom ($alpha_0, alpha_1$) and as $m$ constraints as many are the points I have in my data.
$$
A=mat(delim: "[", 1, T_1;1, T_2; dots.v,dots.v; 1, T_m), b=mat(delim: "[", L_1;L_2;dots.v;L_m)
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
The problem becomes to find $underline(alpha)^* in RR^4$ s.t.
$$
sum_(i=1)^m e_i^2=
min_(underline(alpha) in RR^4) sum_(i=1)^m e_i^2=
min_(underline(alpha) in RR^4) sum_(i=1)^m (alpha_0+alpha_1T_+alpha_2T^2+alpha_3T^3 - L_i)= min_(alpha) norm(A alpha-b)
$$
where
$$
A=mat(delim: "[", 1, T_1, T_1^2, T_1^3;1, T_2, T_2^2, T_2^3; dots.v, dots.v, dots.v, dots.v; 1, T_n, T_n^2, T_n^3), alpha=mat(delim: "[", alpha_0;alpha_1;alpha_2;alpha_3), b=mat(delim: "[", L_1;L_2;dots.v;L_m)
$$
The exact solution can be found only if 
$$
m = n space or space b in op("range")(A)={z in R^m: z=A y space forall y in R^n}
$$
If neither of this conditions is satisfied we can only find the [[Solution in the least square sense|solution in the least square sense]].