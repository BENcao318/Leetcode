/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const sorted = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return nums[i]
  }
}
