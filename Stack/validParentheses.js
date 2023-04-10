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

var isValid = function (s) {
  let count = 0

  for (const char of s) {
    if (char === '(') {
      count++
    } else if (char === ')') {
      count--
    }

    if (count < 0) {
      return false
    }
  }

  return count === 0
}
