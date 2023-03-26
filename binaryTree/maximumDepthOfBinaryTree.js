/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * TIme O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const isBaseCase = root === null
  if (isBaseCase) return 0

  return dfs(root)
}

const dfs = (root) => {
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)

  const height = Math.max(left, right)

  return height + 1
}
