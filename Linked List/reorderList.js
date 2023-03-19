/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let reversedList = reverse(head)
  let sentinel = (tail = new ListNode())

  while (head.val !== reversedList.val) {
    tail.next = head
    head = head.next
    tail = tail.next
    tail.next = reversedList
    reversedList = reversedList.next
    tail = tail.next
  }
  tail.next = head
  return sentinel.next
}

const reverse = (head) => {
  let [prev, curr, next] = [null, head, null]

  while (curr) {
    next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }

  return prev
}
