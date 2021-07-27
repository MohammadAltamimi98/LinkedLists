// const LinkedList = require('./LinkedList');
const List = require('./examTest').List;
const merge = require('./examTest').merge;

const ll = new List();
ll.insertAtHead(5);
ll.insertAtHead(7);
ll.insertAtLast(4);
ll.isnertAtIndex(1, 100);
ll.addbefore(12, 100);
ll.addafter(17, 7);
// ll.toString();
// console.log(ll.toString());
ll.includes(7);
// console.log(ll.isnertAtIndex(1, 100));
// console.log(ll.includes(-5));
console.log(ll);

console.log(ll.isPalindrome);
console.log(ll.reverseList());
// let linkedlist1 = new List();
// linkedlist1.insertAtHead(1);
// linkedlist1.insertAtLast(2);
// linkedlist1.insertAtLast(3);
// let linkedlist2 = new List();
// linkedlist2.insertAtHead(4);
// linkedlist2.insertAtLast(5);
// linkedlist2.insertAtLast(6);
// let ll = merge(linkedlist1, linkedlist2);





// ll.insertAtHead(10);
// ll.insertLast(7);
// ll.insertAtHead(14);
// ll.insertLast(9);
// ll.insertAtIndex(500, 2);
// ll.insertAtIndex(700, 1);
// ll.insertAtIndex(1100, 0);
// ll.insertAtIndex(1100, 10); // out of range
// ll.getAt(4);
// ll.removeAt(4);
// ll.removeAt(2);
// ll.clearAll();
// ll.reverseList()
// ll.addbefore(20, 10);
// ll.addAfter(20, 10);

// console.log(ll.kth(3));
// console.log(ll);

// console.log(ll.toString());


// ll.printData();

// console.log(ll.includesVal(0));

// console.log(ll);
// ll.insertLast(1);
// ll.insertLast(2);
// ll.insertLast(2);
// ll.insertLast(1);
// console.log(ll);
// console.log("==========");
// // const ll2 = ll.reverseList(ll);
// // console.log(ll2);
// console.log(ll.isPalindrome());