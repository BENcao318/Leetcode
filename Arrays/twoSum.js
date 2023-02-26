/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Brute force
  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //         if(nums[i] + nums[j] === target) {
  //             return [i, j]
  //         }
  //     }
  // }

  // Look for the differences, Hash Map
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i]
    if (map.has(difference)) {
      return [i, map.get(difference)]
    }

    map.set(nums[i], i)
  }
}
