/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carry = 0) {
  let List = new ListNode(0)
  let head = List

  while (l1 || l2 || carry) {
    sum = (l1?.val || 0) + (l2?.val || 0) + carry
    val = sum % 10
    carry = Math.floor(sum / 10)

    head.val = val
    head.next = new ListNode()
    head = head.next
    l1 = l1?.next
    l2 = l2?.next
  }

  return List
}
