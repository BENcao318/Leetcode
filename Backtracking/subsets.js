/**
 * https://leetcode.com/problems/subsets/
 * Time O(N * 2^N) | Space(N * 2^N)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = (nums) => {
  nums.sort((a, b) => a - b)

  return bfs(nums)
}

const bfs = (nums, subsets = [[]]) => {
  for (const num of nums) {
    const levels = subsets.length

    for (let level = 0; level < levels; level++) {
      const nextLevel = [...subsets[level], num]

      subsets.push(nextLevel)
    }
  }

  return subsets
}
