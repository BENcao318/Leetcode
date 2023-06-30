/**
 * Matrix - Spiral Traversal Post Update
 * Array - Ignore Auxilary Space O(ROWS * COLS)
 * Time O(ROWS * COLS) | Space O(1)
 * https://leetcode.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = (matrix, order = []) => {
  const [rows, cols] = [matrix.length, matrix[0].length]
  const cells = rows * cols
  let [top, bot, left, right] = [0, rows - 1, 0, cols - 1]

  while (order.length < cells) {
    /* Time O(ROWS * COLS) */
    traverse(
      matrix,
      top,
      bot,
      left,
      right,
      order
    ) /* Time O(ROWS * COLS) | Ignore Auxilary Spsace O(ROWS * COLS) */

    top++
    bot--
    left++
    right--
  }

  return order
}

var traverse = (matrix, top, bot, left, right, order) => {
  addTop(
    matrix,
    top,
    bot,
    left,
    right,
    order
  ) /* Time O(COLS) | Ignore Auxilary Spsace O(ROWS * COLS) */
  addRight(
    matrix,
    top,
    bot,
    left,
    right,
    order
  ) /* Time O(ROWS) | Ignore Auxilary Spsace O(ROWS * COLS)*/
  addBot(
    matrix,
    top,
    bot,
    left,
    right,
    order
  ) /* Time O(COLS) | Ignore Auxilary Spsace O(ROWS * COLS)*/
  addLeft(
    matrix,
    top,
    bot,
    left,
    right,
    order
  ) /* Time O(ROWS) | Ignore Auxilary Spsace O(ROWS * COLS. */
}

var addTop = (matrix, top, bot, left, right, order) => {
  for (let col = left; col <= right; col++) {
    /* Time O(COLS) */
    order.push(matrix[top][col]) /* Ignore Auxilary Spsace O(ROWS * COLS) */
  }
}

var addRight = (matrix, top, bot, left, right, order) => {
  for (let row = top + 1; row <= bot; row++) {
    /* Time O(ROWS) */
    order.push(matrix[row][right]) /* Ignore Auxilary Spsace O(ROWS * COLS) */
  }
}

var addBot = (matrix, top, bot, left, right, order) => {
  for (let col = right - 1; left <= col; col--) {
    /* Time O(COLS) */
    const isOutOfBounds = top === bot
    if (isOutOfBounds) return

    order.push(matrix[bot][col]) /* Ignore Auxilary Spsace O(ROWS * COLS) */
  }
}

var addLeft = (matrix, top, bot, left, right, order) => {
  for (let row = bot - 1; row >= top + 1; row--) {
    /* Time O(ROWS) */
    const isOutOfBounds = left === right
    if (isOutOfBounds) return

    order.push(matrix[row][left]) /* Ignore Auxilary Spsace O(ROWS * COLS) */
  }
}
