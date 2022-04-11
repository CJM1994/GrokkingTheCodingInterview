/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  let sortedList = new ListNode();
  const head = sortedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      sortedList.next = list1;
      list1 = list1.next;
    } else {
      sortedList.next = list2;
      list2 = list2.next;
    }
    sortedList = sortedList.next;
  }

  if (list1) {
    sortedList.next = list1;
  }
  if (list2) {
    sortedList.next = list2;
  }

  return head;

};
