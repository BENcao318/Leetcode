/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const arr = reorder(nums)
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i]
    if (a > 0) break
    if (i > 0 && arr[i - 1] === a) continue

    let left = i + 1
    let right = arr.length - 1
    while (left < right) {
      sum = a + arr[left] + arr[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        result.push([a, arr[left], arr[right]])
        left++
        right--
        while (arr[left] === arr[left - 1]) {
          left++
        }
      }
    }
  }
  return result
}

const reorder = (nums) => {
  return nums.sort((a, b) => a - b)
}
