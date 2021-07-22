'use strict';
const LinkedList = require('../LinkedList');

describe('#insertAtHead', () => {
  test('should add the element to the begining of the linkedlist', () => {
    const ll = new LinkedList();
    ll.insertAtHead(5);
    const oldHead = ll.head;
    ll.insertAtHead(20)

    expect(ll.head.data).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  })
})


// describe('#add an element at last', () => {
//   test('it adds an element at the last node', () => {
//     const ll = new LinkedList();
//     test('should ', () => {
      
      
//     })
//   })

// })
