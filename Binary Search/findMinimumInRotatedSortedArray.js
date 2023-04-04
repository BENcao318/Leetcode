/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1]

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return nums[left]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1]

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] >= nums[left]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return nums[left]
}
