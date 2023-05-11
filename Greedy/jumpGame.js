/**
 * Time O(2^N) | Space O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = (nums, index = 0) => {
  const isBaseCase = index === nums.length - 1
  if (isBaseCase) return true

  const furthestJump = Math.min(index + nums[index], nums.length - 1)
  for (let nextIndex = index + 1; nextIndex <= furthestJump; nextIndex++) {
    if (canJump(nums, nextIndex)) return true
  }

  return false
}
