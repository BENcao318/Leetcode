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

/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Time O(N * log(N)) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let [left, right, duplicate] = [1, nums.length - 1, -1]

  while (left <= right) {
    /* Time O(log(N)) */
    const mid = (left + right) >> 1
    const count = getCount(mid, nums) /* Time O(N) */

    const isMidGreater = count <= mid
    if (isMidGreater) left = mid + 1

    const isMidLess = mid < count
    if (isMidLess) {
      duplicate = mid
      right = mid - 1
    }
  }

  return duplicate
}

const getCount = (mid, nums, count = 0) => {
  for (const num of nums) {
    /* Time O(N) */
    const isMidGreater = num <= mid
    if (isMidGreater) count++
  }

  return count
}
