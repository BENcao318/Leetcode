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
  const mid = getMid(head)
  const reversedFromMid = reverse(mid)

  reorder(head, reversedFromMid)
}

const getMid = (head) => {
  let [slow, fast] = [head, head]
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
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

const reorder = (l1, l2) => {
  let [first, next, second] = [l1, null, l2]

  while (second.next) {
    next = first.next
    first.next = second
    first = next

    next = second.next
    second.next = first
    second = next
  }
}

var reorderList = function (head) {
  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr)
    curr = curr.next
  }

  let [i, j] = [0, arr.length - 1]
  while (i < j) {
    arr[i].next = arr[j]
    i++
    if (i === j) break
    arr[j].next = arr[i]
    j--
  }
  arr[i].next = null
}
