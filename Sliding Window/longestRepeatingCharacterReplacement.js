/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let [left, right] = [0, 1]
  let max = 0

  for (let i = 0; i < s.length; i++) {
    let count = k
    let string = [s[i]]
    right = i + 1
    while (right < s.length) {
      if (s[right] === string[0]) {
        string.push(s[right])
      } else if (count !== 0) {
        count--
        string.push(s[right])
      } else {
        break
      }
      right++
    }
    console.log(string)
    max = Math.max(max, string.length)
  }

  return max
}
