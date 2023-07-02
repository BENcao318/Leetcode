/**
 * Constant Space
 * Time O(ROWS * COLS) | Space (1)
 * https://leetcode.com/problems/set-matrix-zeroes/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = (matrix) => {
  const _isColZero = isColZero(matrix) /* Time O(ROWS) */

  setEdgesToZero(matrix) /* Time O(ROWS) */
  setCellsToZero(matrix, _isColZero) /* Time O(ROWS * COLS) */
}

var isColZero = (matrix) =>
  matrix.some((row) => row[0] === 0) /* Time O(ROWS) */

var setEdgesToZero = (matrix) => {
  const [rows, cols] = [matrix.length, matrix[0].length]

  for (let row = 0; row < rows; row++) {
    /* Time (ROWS) */
    for (let col = 1; col < cols; col++) {
      /* Time (COLS) */
      const canSet = matrix[row][col] === 0
      if (!canSet) continue

      matrix[row][0] = 0
      matrix[0][col] = 0
    }
  }
}

var setCellsToZero = (matrix, isColZero) => {
  const [rows, cols] = [matrix.length, matrix[0].length]

  for (let row = rows - 1; 0 <= row; row--) {
    /* Time (ROWS) */
    for (let col = cols - 1; 1 <= col; col--) {
      /* Time (COLS) */
      if (!isZero(matrix, row, col)) continue

      matrix[row][col] = 0
    }

    if (isColZero) matrix[row][0] = 0
  }
}

var isZero = (matrix, row, col) => {
  const [rowLeftEdge, colTopEdge] = [matrix[row][0], matrix[0][col]]

  return rowLeftEdge === 0 || colTopEdge === 0
}
