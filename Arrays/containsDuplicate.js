/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //Brute Force
  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //         if(nums[i] === nums[j]) {
  //             return true
  //         }
  //     }
  // }
  // return false

  //sort first
  // let sortedNums = nums.sort((a, b) => a - b)

  // for(let i = 0; i < sortedNums.length - 1; i++) {
  //     next = i + 1
  //     if(sortedNums[i] === sortedNums[next]){
  //         return true
  //     }
  // }
  // return false

  //Set
  const numsSet = new Set(nums)
  if (numsSet.size === nums.length) return false
  return true

  //Has Set - Early Exit
  // for(const num of nums) {
  //     if(numsSet.has(num)) return true
  //     numsSet.add(num)
  // }
  // return false
}
