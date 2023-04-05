/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [l, r] = [0, nums.length - 1]

  while (l <= r) {
    const m = Math.floor(l + r)
    if (nums[m] === target) return m

    if (nums[m] < target) {
      l = m + 1
    } else {
      r = m - 1
    }
  }

  return -1
}
