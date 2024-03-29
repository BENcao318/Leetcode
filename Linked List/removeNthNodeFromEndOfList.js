/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const length = getNthFromEnd(head, n)

  if (length < 0) return head.next

  const curr = moveNode(head, length)

  curr.next = curr.next.next

  return head
}

const getNthFromEnd = (curr, n, len = 0) => {
  while (curr) {
    curr = curr.next
    len++
  }
  return len - n - 1
}

const moveNode = (curr, len) => {
  while (len) {
    curr = curr.next
    len--
  }
  return curr
}

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const length = getNthFromEnd(head, n) /* Time O(N) */

  const isHead = length < 0
  if (isHead) return head.next

  const curr = moveNode(head, length) /* Time O(N) */

  curr.next = curr.next.next

  return head
}

const getNthFromEnd = (curr, n, length = 0) => {
  while (curr) {
    /* Time O(N) */
    curr = curr.next
    length++
  }

  return length - n - 1
}

const moveNode = (curr, length) => {
  while (length) {
    /* Time O(N) */
    curr = curr.next
    length--
  }

  return curr
}
