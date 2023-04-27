/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
  const stack = []

  for (const token of tokens) {
    switch (token) {
      case '+':
        add(stack)
        break
      case '-':
        minus(stack)
        break
      case '*':
        multiply(stack)
        break
      case '/':
        divide(stack)
        break
      default:
        stack.push(token)
    }
  }

  return stack[0]
}

const add = (stack) => {
  const top = parseInt(stack.pop())
  const next = parseInt(stack.pop())

  stack.push(top + next)
}

const minus = (stack) => {
  const top = parseInt(stack.pop())
  const next = parseInt(stack.pop())

  stack.push(next - top)
}

const multiply = (stack) => {
  const top = parseInt(stack.pop())
  const next = parseInt(stack.pop())

  stack.push(top * next)
}

const divide = (stack) => {
  const top = parseInt(stack.pop())
  const next = parseInt(stack.pop())
  let token = next / top

  if (token < 0) {
    token = Math.ceil(token)
  } else {
    token = Math.floor(token)
  }

  stack.push(token)
}

var evalRPN = function (tokens) {
  const stack = []

  for (const token of tokens) {
    if (isOperator(token)) {
      const [b, a] = [stack.pop(), stack.pop()]
      stack.push(operate(a, b, token))
    } else {
      stack.push(parseInt(token))
    }
  }

  return stack[0]
}

const isOperator = (token) => {
  return token === '+' || token === '-' || token === '*' || token === '/'
}

const operate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return Math.trunc(a / b)
  }
}

/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 * Time O(N) | Space(N)
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens, stack = []) {
  for (const char of tokens) {
    /* Time O(N) */
    const isOperation = char in OPERATORS
    if (isOperation) {
      const value = performOperation(char, stack)

      stack.push(value) /* Space O(N) */

      continue
    }

    stack.push(Number(char)) /* Space O(N) */
  }

  return stack.pop()
}

var OPERATORS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b),
}

var performOperation = (char, stack) => {
  const [rightNum, leftNum] = [stack.pop(), stack.pop()]
  const operation = OPERATORS[char]

  return operation(leftNum, rightNum)
}

/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * TIme O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root, max = [0]) {
  diameterOfTree(root, max)

  return max[0]
}

const diameterOfTree = (root, max) => {
  const isBaseCase = root === null
  if (isBaseCase) return 0

  return dfs(root, max)
}

const dfs = (root, max) => {
  const left = diameterOfTree(root.left, max)
  const right = diameterOfTree(root.right, max)

  const diameter = left + right
  max[0] = Math.max(max[0], diameter)

  const height = Math.max(left, right)

  return height + 1
}
