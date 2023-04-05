class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val, { minStack } = this) {
    this.stack.push(val)

    if (this.top(minStack) >= val || !minStack.length) {
      minStack.push(val)
    }
  }

  pop({ stack, minStack } = this) {
    const top = stack.pop()
    if (this.getMin() === top) minStack.pop()
  }

  top(stack = this.stack) {
    return stack.length ? stack[stack.length - 1] : null
  }

  getMin(minStack = this.minStack) {
    return this.top(minStack)
  }
}

// var MinStack = function() {

// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {

// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {

// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {

// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {

// };

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
