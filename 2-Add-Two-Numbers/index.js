/**
 *
 * @param {*BigNumber} m
 * @param {*BigNumber} n
 */
const twoSum = (m, n) => {
  const a = m.reverse();

  const b = n.reverse();

  console.info(a, b);

  let carry = 0;

  const largerArray = a.length >= b.length ? a : b;
  const smallerArray = a.length >= b.length ? b : a;

  // console.info(largerArray, smallerArray);

  return largerArray.reduce((acc, cur, idx) => {
    if (idx < smallerArray.length) {
      const added = parseInt(cur) + parseInt(smallerArray[idx]) + carry;
      if (added >= 10) {
        carry = 1;
        acc.push(added % 10);
      } else {
        carry = 0;
        acc.push(added);
      }
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
};

const a = "1234567890987654321".split("");
const b = "8765432109012345678".split("");

console.log(solution(a, b));
