/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   const arr = reorder(nums)
//   const result = []

//   for (let i = 0; i < arr.length; i++) {
//     const a = arr[i]
//     if (a > 0) break
//     if (i > 0 && arr[i - 1] === a) continue

//     let left = i + 1
//     let right = arr.length - 1
//     while (left < right) {
//       sum = a + arr[left] + arr[right]
//       if (sum > 0) {
//         right--
//       } else if (sum < 0) {
//         left++
//       } else {
//         result.push([a, arr[left], arr[right]])
//         left++
//         right--
//         while (arr[left] === arr[left - 1]) {
//           left++
//         }
//       }
//     }
//   }
//   return result
// }

// const reorder = (nums) => {
//   return nums.sort((a, b) => a - b)
// }

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    const hash = {}
    for (let j = i + 1; j < nums.length; j++) {
      const complement = -nums[i] - nums[j]
      if (hash[complement]) {
        result.push([nums[i], complement, nums[j]])
        while (nums[j] === nums[j + 1]) j++
      }
      hash[nums[j]] = true
    }
  }

  return result
}
