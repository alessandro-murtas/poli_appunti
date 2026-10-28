The deflation methods are used to compute additional eigenvalues $lambda_2, dots.h,lambda_n$ of $A$ after we computed $lambda_1$ by removing it.
After we removed $lambda_1$ we can obtain $lambda_2$ with the [[Power method|power method]].
We can compute matrix $S$ and $alpha=(b^H z_2)/(lambda_1 - lambda_2)$,  ($lambda_1-lambda_2$ can be estimated without knowing $lambda_2$).
The process can be repeated to find additional eigenpairs.