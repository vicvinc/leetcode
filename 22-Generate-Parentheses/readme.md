# thoughts

in recursive version:

```javascript

if num === 0 ans.push(pre)

next(`${pre}()`, num - 1);

next(`${pre}(${parenthesis("", num - 1)})`, 0);

```
