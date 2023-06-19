/**
 * Array - Subsequence
 * Time O(N^2) | Space O(N)
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = (nums) => {
  const subsequence = linearSort(nums) /* Time O(N * N) | Space O(N) */

  return subsequence.length
}

var linearSort = (nums, subsequence = []) => {
  for (const num of nums) {
    /* Time O(N) */
    const max = subsequence[subsequence.length - 1]

    const canAdd = max < num
    if (canAdd) {
      subsequence.push(num)
      continue
    } /* Space O(N) */

    const index = getMax(subsequence, num) /* Time O(N) */

    subsequence[index] = num
  }

  return subsequence
}

const getMax = (subsequence, num, index = 0) => {
  const isLess = () => subsequence[index] < num
  while (isLess()) index++ /* Time O(N) */

  return index
}
