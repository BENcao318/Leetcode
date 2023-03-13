/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [left, right, max] = [0, 1, 0]

  while (right < prices.length) {
    if (prices[left] >= prices[right]) left = right

    const diff = prices[right] - prices[left]
    max = Math.max(diff, max)

    right++
  }

  return max
}
