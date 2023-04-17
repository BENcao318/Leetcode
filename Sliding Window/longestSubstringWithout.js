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

/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let l = 0
  let max = 0

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l])
      l++
    }
    set.add(s[r])
    max = Math.max(max, set.size)
  }
  return max
}
