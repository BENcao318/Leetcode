/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1
  let sum = 0

  while (left < right) {
    sum = numbers[left] + numbers[right]

    if (sum < target) {
      left++
    } else if (sum > target) {
      right--
    } else {
      return [left + 1, right + 1]
    }
  }

  return false
}

/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Time O(N) | Space O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1]

  while (left < right) {
    const sum = numbers[left] + numbers[right]

    const isTarget = sum === target
    if (isTarget) return [left + 1, right + 1]

    const isTargetGreater = sum < target
    if (isTargetGreater) left++

    const isTargetLess = target < sum
    if (isTargetLess) right--
  }

  return [-1, -1]
}
