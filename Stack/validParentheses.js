/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  const map = { ')': '(', ']': '[', '}': '{' }

  for (const char of s) {
    if (!map[char]) {
      stack.push(char)
      continue
    }

    if (stack[stack.length - 1] === map[char]) {
      stack.pop()
      continue
    }

    return false
  }
  return stack.length === 0
}
