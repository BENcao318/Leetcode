/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // Time O(n)
  const prefix = new Array(nums.length).fill(1)
  const postfix = new Array(nums.length).fill(1)
  const result = []

  for (let i = 0; i < nums.length; i++) {
    const product =
      prefix[i - 1] !== undefined ? prefix[i - 1] * nums[i] : nums[i]
    prefix[i] *= product
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const product =
      postfix[i + 1] !== undefined ? postfix[i + 1] * nums[i] : nums[i]
    postfix[i] *= product
  }

  for (let i = 0; i < nums.length; i++) {
    const pre = prefix[i - 1] !== undefined ? prefix[i - 1] : 1
    const post = postfix[i + 1] !== undefined ? postfix[i + 1] : 1

    result.push(pre * post)
  }

  console.log(prefix)
  console.log(postfix)

  return result
}
