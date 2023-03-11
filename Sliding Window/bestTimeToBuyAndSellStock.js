/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0
  if (prices.length <= 1) return maxProfit
  let [left, right] = [0, 1]

  for (let i = 0; i < prices.length; i++) {
    const diff = prices[right] - prices[left]
    if (diff <= 0) {
      left = right
      right++
    } else {
      right++
    }
    if (diff > maxProfit) maxProfit = diff
  }

  return maxProfit
}
