# summary

for row(r) > 2

| row | total    | nums     | empty        |
| --- | -------- | -------- | ------------ |
| r   | r\*(r-1) | 2\*(r-1) | (r-1)\*(r-2) |

for each row contains two elements.

which is `[0]` and `[r-i-1]` i belongs in (0, r-1).

> for each chunk c:
>
> > for each row r contains two elements:
> >
> > > the first char is `[c + r]`
> > > the sencond char is `[c + row - r - 1]`
