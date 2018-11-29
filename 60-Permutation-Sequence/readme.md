# thoughts

for the start of the nth element in nums, it has n _ (n - 1)! permutation
for the given number of k which is the k'th permutation, find the nearest start element
remove the element from the nums, push it as the head of the permutaion
next let k = k mod n _ (n - 1)!, n = n - 1
if n === 0, return ans
