Instruction Level Parallelism (ILP) is a parallelization technique that aims to run multiple instructions that do not depend on each other at the same time.
For example in this code
```cpp
int a=2+3;
int b=4+3;
int c=a+b;
int t2=c+1;
int t3=c+2;
```
instruction 1,2 and 4,5 can run at the same time.
```tikz
\begin{document}
\begin{tikzpicture}[
  every node/.style={
    draw, 
    rectangle, 
    minimum size=10mm, % Increased so all text fits inside equal-sized circles
    inner sep=1pt,
    font=\small        % Optional: slightly smaller text for a cleaner fit
  },
  >=stealth, thick     % Applies arrow style globally to \draw commands
]

\node (1) at (2,1) {$a=2+3$};
\node (2) at (2,-1) {$b=4+3$};
\node (3) at (4,0) {$c=a+b$};
\node (4) at (6,1) {$t_2=c+1$};
\node (5) at (6,-1) {$t_3=c+2$};

\draw[->] (1) -- (3);
\draw[->] (2) -- (3);
\draw[->] (3) -- (4);
\draw[->] (3) -- (5);

\end{tikzpicture}
\end{document}
```
