/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length
  let [left, right] = [0, 1]
  let [maxLength, string] = [1, [s[0]]]

  while (right < s.length) {
    if (!string.includes(s[right])) {
      string.push(s[right])
      maxLength = Math.max(maxLength, string.length)
      right++
    } else {
      left++
      right = left + 1
      string = [s[left]]
    }
  }

  return maxLength
}
