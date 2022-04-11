const { it } = require('@jest/globals')
const LinkedList = require('./linked_list')

describe('Linked Lists', () => {

  it('Adds the element to the beginning of the linked list', () => {
    const ll = new LinkedList()
    ll.insertAtHead(100);
    const oldHead = ll.head.value;
    ll.insertAtHead(200);
    expect(ll.head.value).toBe(200);
    expect(oldHead).toBe(100);
  })

  it('Removes the element at the beginning of the linked list', () => {
    const ll = new LinkedList()
    ll.insertAtHead(100);
    const oldHead = ll.head.value;
    ll.removeAtHead();
    expect(ll.head).toBe(null);
    expect(oldHead).toBe(100);
  })

})