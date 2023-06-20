/**
 * DP - Bottom Up
 * Matrix - Tabulation
 * Time O(N * M) | Space O(N * M)
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = (nums) => {
  const isEmpty = nums.length === 0
  if (isEmpty) return false

  const sum = getSum(nums) /* Time O(N) */

  const isEven = sum % 2 === 0
  if (!isEven) return false

  const subSetSum = sum >> 1
  const tabu = initTabu(nums, subSetSum) /*            | Space O(N * M) */

  search(nums, subSetSum, tabu)

  return tabu[nums.length][subSetSum]
}

var getSum = (nums, sum = 0) => {
  for (const num of nums) {
    sum += num
  } /* Time O(N) */

  return sum
}

var initTabu = (nums, subSetSum) => {
  const tabu = new Array(nums.length + 1)
    .fill() /* Space O(N) */
    .map(() => new Array(subSetSum + 1).fill(false)) /* Space O(M) */

  tabu[0][0] = true /* Space O(N * M) */

  return tabu
}

var search = (nums, subSetSum, tabu) => {
  for (let numIndex = 1; numIndex <= nums.length; numIndex++) {
    /* Time O(N) */
    update(nums, numIndex, subSetSum, tabu) /* Time O(N) | Space O(N * M) */
  }
}

var update = (nums, numIndex, subSetSum, tabu) => {
  const num = numIndex - 1
  const prevNum = nums[num]

  for (let subSet = 0; subSet <= subSetSum; subSet++) {
    /* Time O(M) */
    const isNumGreater = subSet < prevNum

    tabu[numIndex][subSet] = isNumGreater /* Space O(N * M) */
      ? tabu[num][subSet]
      : tabu[num][subSet] || tabu[num][subSet - prevNum]
  }
}
