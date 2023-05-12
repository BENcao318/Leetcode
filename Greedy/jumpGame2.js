/**
 * https://leetcode.com/problems/jump-game-ii/
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let [jumps, currentJumpEnd, farthest] = [0, 0, 0]

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i])

    const canJump = i === currentJumpEnd
    if (canJump) {
      jumps++
      currentJumpEnd = farthest
    }
  }

  return jumps
}
