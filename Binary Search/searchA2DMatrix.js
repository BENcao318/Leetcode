/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let l = 0
  let r = matrix.length - 1
  let arr = []

  while (l <= r && !arr.length) {
    const m = Math.floor((l + r) / 2)
    if (matrix[m][matrix[m].length - 1] >= target && matrix[m][0] <= target) {
      arr = matrix[m]
    } else if (matrix[m][matrix[m].length - 1] < target) {
      l = m + 1
    } else if (matrix[m][0] > target) {
      r = m - 1
    }
  }

  if (arr.length) {
    l = 0
    r = arr.length - 1
  }

  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    if (arr[m] === target) return true
    if (arr[m] > target) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return false
}
