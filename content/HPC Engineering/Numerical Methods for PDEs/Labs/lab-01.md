### Exercise 1
#### 1.1
$$
cases(
-(mu(x)u'(x))'=f(x)
,u(0)=u(1)=0) space.quad space.quad r in (0,1)
$$
Take $v in V$
$$
-(mu u')'v=f v\
integral_r -(mu u')'v=integral_r f v
$$
Integrating by parts (Green formula)
$$
integral_0^1 mu u' v' - [mu u' v]^1_0=integral_0^1 f v
$$
Fix $v(0)=v(1)=0$
$$
integral_0^1 mu u' v'=integral_0^1 f v space.quad forall v in V
$$
For well definition of integrals $u,v in V=H_0^1(r)={v in L^2(r), v(0)=v(1)=0}$
$f in L^1(r)$
$mu eq.def 1$ in ex.1
$$
a&:V times V -> RR space.quad space.quad & a(u,v) =integral_0^1 mu u' v' dif x \
F&: V -> RR     &  d = integral_0^1 f v dif x 
$$

> [!info] Weak formulation
> Find $u in V$:
> $$
> a(u, v)=F(v) space.quad forall v in V
> $$
#### 1.2
Let $V_h subset.eq V$ finite dimensional space
>[!info] Galerking formulation
>Find $u_h in V_h$:
>$$a(u_a, v_a)=F(v_a) space.quad forall v_h in V_h$$
#### 1.3
$N_(e l)$ sub intervals
$k_c, c=1,..., N_(e l)$ are the elements/sub intervals
$$
X_h^r (r)={v_h in cal(C)^2(overline(r))) : v_h(x) in PP_r space forall x in K_c, c=1,...,N_(e l)}
$$
$$
V_h = X_h^r
(r) inter H_0^1 (r)$$
Let $phi_i(x), i=1,..., dim(V_h)$ the Lagrangian basis functions of $V_h$
Let $N_h=dim(V_h)$
$phi_i(x_j)=delta_(i j) space.quad forall i,j=1,...,N_h$
$phi_1(x)$
$$
u_h=sum_(j = 1)^(N_h) u_j phi_j(x) in V_h
$$
Where $U_j$ are the degrees of freedom (unknowns)
>[!info] FEM formulation
>Find $u_h in V_h$: 
>$$sum_(j=1)^N_h u_j a(phi_j, phi_i)=F(phi_i) space.quad i=1,...,N_h$$

Define $A_(i, j)=a(phi_j, phi_i)$
$$
f_i=F(phi_i) ==> A underline(u)=underline(f)
$$
## Quadrature formula
$$
integral_D f(x) dif x approx sum_(a=1)^N_q w_q g(x_q)
$$
where $w_q$ are the weights and $x_q$ are the quad modes
Degree of exactness $p$ if $integral_D g=sum W_q g(x_q)$ if $g in PP_p (D)$
$integral phi'_i (x) phi'_j (x) dif x ->$ i need quadrature formula of degree $2r-2$
Usually you want to integrate $integral phi_i phi_j$
#### Gauss Quadrature
Gauss quadratures with $n_q$ nodes are exact of degree $2 n_q - 1$. We use $n_q=r+1$ in such a way that $2 n_q -1 >= 2 r$

### Sparsity
$$
a(phi_i, phi_j)= integral phi_j phi_i
$$
$a(phi_1, phi_1)!=0$
$a(phi_1, phi_2)!=0$
$a(phi_1, phi_2)=0$, $j != 1,2$