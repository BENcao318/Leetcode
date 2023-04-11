/**
 * https://leetcode.com/problems/container-with-most-water/
 * Time O(N) | Space(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let [left, right, max] = [0, height.length - 1, 0]

  while (left < right) {
    const [leftHeight, rightHeight] = getHeights(height, left, right)
    const area = getArea(height, left, right)

    max = Math.max(max, area)

    const isRightGreater = leftHeight <= rightHeight
    if (isRightGreater) left++

    const isRightLess = rightHeight < leftHeight
    if (isRightLess) right--
  }

  return max
}

const getHeights = (height, left, right) => [height[left], height[right]]

const getArea = (height, left, right) => {
  const [leftHeight, rightHeight] = getHeights(height, left, right)
  const _height = Math.min(leftHeight, rightHeight)
  const width = right - left

  return _height * width
}

var maxArea = function (height) {
  const stack = []
  let max = 0

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const j = stack.pop()
      if (stack.length > 0) {
        const k = stack[stack.length - 1]
        const area = (i - k - 1) * (Math.min(height[i], height[k]) - height[j])
        max = Math.max(max, area)
      }
    }
    stack.push(i)
  }

  return max
}
