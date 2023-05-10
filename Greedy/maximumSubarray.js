/**
 * https://leetcode.com/problems/maximum-subarray/
 * Time O(N * log(N)) | Space O(log(N))
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums, left = 0, right = nums.length - 1) {
  const isBaseCase = right < left
  if (isBaseCase) return -Infinity

  const mid = (left + right) >> 1
  const guess = nums[mid]
  const leftSum = getLeftSumFromMid(nums, mid, left)
  const rightSum = getRightSumFromMid(nums, mid, right)
  const sum = guess + leftSum + rightSum

  const leftHalf = maxSubArray(nums, left, mid - 1)
  const rightHalf = maxSubArray(nums, mid + 1, right)

  return Math.max(sum, leftHalf, rightHalf)
}

const getLeftSumFromMid = (nums, mid, left, sum = 0, maxSum = 0) => {
  for (let i = mid - 1; left <= i; i--) {
    sum += nums[i]
    maxSum = Math.max(maxSum, sum)
  }

  return maxSum
}
