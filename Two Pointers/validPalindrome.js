/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.length) return false

  let left = 0
  let right = s.length - 1
  let leftChar, rightChar

  while (left < right) {
    leftChar = s[left]
    rightChar = s[right]

    if (!/[a-zA-Z0-9]/.test(leftChar)) {
      left++
    } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
      right--
    } else {
      if (leftChar.toLowerCase() !== rightChar.toLowerCase()) return false
      left++
      right--
    }
  }

  return true
}


View on Github
/**
 * Array - Filter && Clone && Reverse
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s.length) return true;
    
    const alphaNumeric = filterAlphaNumeric(s);/* Time O(N) | Space O(N) */
    const reversed = reverse(alphaNumeric);    /* Time O(N) | Space O(N) */
    
    return alphaNumeric === reversed;
};

const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]','gi')) => s
    .toLowerCase()               /* Time O(N) | Space O(N) */
    .replace(nonAlphaNumeric, '')/* Time O(N) | Space O(N) */

const reverse = (s) => s
    .split('')/* Time O(N) | Space O(N) */
    .reverse()/* Time O(N) | Space O(N) */
    .join('');/* Time O(N) | Space O(N) */