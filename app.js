const LinkedList = require('./LinkedList');

const ll = new LinkedList();
ll.insertAtHead(5);
ll.insertAtHead(10);
ll.insertLast(7);
ll.insertAtHead(14);
ll.insertLast(9);
ll.insertAtIndex(500, 2);
ll.insertAtIndex(700, 1);
ll.insertAtIndex(1100, 0);
// ll.insertAtIndex(1100, 10); // out of range
ll.getAt(4);
ll.removeAt(4);
ll.removeAt(2);
// ll.clearAll();
// ll.reverseList()
ll.addbefore(20, 10);
ll.addAfter(20, 10);

console.log(ll);




ll.printData();

// console.log(ll.includesVal(0));