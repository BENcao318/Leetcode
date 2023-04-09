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
