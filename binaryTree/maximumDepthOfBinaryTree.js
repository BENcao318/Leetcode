/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * TIme O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function (root) {
//   const isBaseCase = root === null
//   if (isBaseCase) return 0

//   return dfs(root)
// }

// const dfs = (root) => {
//   const left = maxDepth(root.left)
//   const right = maxDepth(root.right)

//   const height = Math.max(left, right)
//   return height + 1
// }
const maxDepth = (root) => {
  if (!root) return 0
  let queue = [root]
  let depth = 0
  while (queue.length > 0) {
    let levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    depth++
  }
  return depth
}
