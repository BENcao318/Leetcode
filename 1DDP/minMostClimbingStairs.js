/**
 * DP - Bottom Up
 * Array - Tabulation
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = (cost) => {
  const tabu = new Array(cost.length + 1).fill(0)

  for (let i = 2; i < tabu.length; i++) {
    const [prev, prevPrev] = [i - 1, i - 2]
    const downOne = tabu[prev] + cost[prev]
    const downTwo = tabu[prevPrev] + cost[prevPrev]

    tabu[i] = Math.min(downOne, downTwo)
  }

  return tabu[tabu.length - 1]
}
