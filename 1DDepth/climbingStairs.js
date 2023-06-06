/**
 * Brute Force - DFS
 * Time O(2^N) | Space O(N)
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = (n, index = 0) => {
  const isBaseCase1 = n < index
  if (isBaseCase1) return 0

  const isBaseCase2 = index === n
  if (isBaseCase2) return 1

  const [next, nextNext] = [index + 1, index + 2]
  const left = climbStairs(n, next) /* Time O(2^N) | Space O(N) */
  const right = climbStairs(n, nextNext) /* Time O(2^N) | Space O(N) */

  return left + right
}
