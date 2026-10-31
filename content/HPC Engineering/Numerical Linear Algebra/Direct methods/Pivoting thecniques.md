If at iteration $k$ my pivotal element $a_(k k)<epsilon.alt$ i can switch it with another element in the matrix that hasn't been yet processed to increase stability.
### Pivoting by rows
In pivoting by rows i pick the element from the same column and switch only the rows.
I pick the element with the biggest modulus for increased stability.
### Complete pivoting
In complete pivoting i pick the biggest element from the matrix still not processed and if it's in another column i switch both the rows and the columns
>[!warning] If you switch the columns you must remember to switch also the $b$ vector and the solution $x$

$$
A x=b <==> P A Q Q^(-1) x=P b <==> L y = P b, U x^*=y, x=Q x^*
$$
Complete pivoting is more expensive than pivoting by rows but guarantees more stability.