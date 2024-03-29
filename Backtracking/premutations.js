/**
 * https://leetcode.com/problems/permutations/solution/
 * Time O(N!) | Space(N!)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  return bfs(nums)
}

const bfs = (nums, levels = [[]], permutations = []) => {
  for (const num of nums) {
    for (let i = levels.length - 1; 0 <= i; i--) {
      const previousLevel = levels.shift()

      for (let index = 0; index < previousLevel.length + 1; index++) {
        const level = reArrangeSet(previousLevel, num, index)

        const isBaseCase = level.length === nums.length
        if (isBaseCase) {
          permutations.push(level)
          continue
        }

        levels.push(level)
      }
    }
  }

  return permutations
}

const reArrangeSet = (previousLevel, num, index) => {
  const [before, after] = [
    previousLevel.slice(0, index),
    previousLevel.slice(index),
  ]

  return [...before, num, ...after]
}
