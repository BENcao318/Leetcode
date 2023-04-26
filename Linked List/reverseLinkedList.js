/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null]

  while (curr) {
    next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }

  return prev
}

/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null]

  while (curr) {
    /* Time O(N) */
    next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }

  return prev
}
