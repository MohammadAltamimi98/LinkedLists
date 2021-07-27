'use strict';

// ** Define a node which will contain a constructor with data and next properties; when called and passed a value it will create a new object.


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

// {let node_A = new Node(1);//1.  this will create a node where its data is 1 and its next value is set to null becaue it is not connected- to connect them go to step 2.
// let node_B = new Node(2);
// let node_C = new Node(3);
// let node_D = new Node(4);}

//2. how to connect these nodes; define the next attribute of each node to be the following node. 
// {node_A.next = node_B
// node_B.next = node_C
// node_C.next = node_D}

// **although this works fine but its not functional hence we need to create a class for  LinkedLists
//**create a constructor that has the head and length(optional) properties.

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // create methods to use the linkedlist
  //1. Insert data at the head of the linked list
  //--------> think of it this way ; we have a current node before we start in this linked list; now we want to add a new node at the begining so-------->

  //1. create a new node instance and set the data to the value and teh next attribute to this.head so that your new node's next method reference the previous one
  //2. define the head of your new linked list to be this newly created node
  insertAtHead(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  // 1. define a new node
  //2. define current
  // if statement -- if the list is empty (how do we check for that ? !this.head  or this.head === null) then define the head as the new node ---
  // else ===> where the list is not empty 1. define the current to be this.head to use as pointer
  // 2. run a loop where the condition is (current.next) which means as long as the attribute next exists do the following.
  //3. set the current = current.next to loop through the nodes.
  //4. after the while and inside the else we define the next attribute of the current to equal this new node.
  //5. outside the if-else statement increase the length.


  insertLast(data) {
    let newNode = new Node(data);
    let current;

    if (!this.head) {
      this.head = newNode;
    }
    else {
      current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = newNode;
    }
    this.length++;
  }


  // insert data at a certain index
  insertAtIndex(data, index) {

    // edge case if index is more than zero but out of the length - out of range
    if (index > 0 && index > this.length) {
      return;
    }

    // if index is zero
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    // ex: linked list of four nodes >> insert 300 at index 2 >>
    //1. define current to be this.head and start a count from zero
    // 2. start a while loop while the countis less than index do the following 
    // 3. set the previous to current (which is a pointer at this.head)
    // 4. increase the count to step forward 
    // 5.define the new current to be current.next 

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.length++;
  }


  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }


  removeAt(index) {
    if (index > 0 && index > this.length) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    // remove first
    if (index === 0) {
      this.head = current.next;
    }
    else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
  }

  clearAll() {
    this.head = null;
    this.length = 0;
  }


  // add before
  addbefore(value, valueToAddBefore) {

    let current = this.head;
    if (!current.next) {
      return false
    }

    while (current.next) {
      if (current.next.data === valueToAddBefore) {
        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  //add after

  addAfter(value, value2A) {
    let current = this.head;

    if (!current) {
      return false;
    }
    while (current) {
      if (current.data === value2A) {
        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // includes a value
  includesVal(value) {

    let current = this.head;
    while (current) {
      if (current.data === value)
        return true;
      current = current.next;

    }
    return false;
  }

  toString() {
    let current = this.head;
    if (!current) throw new Error('Can not turn a null linked list into strings, add head.');

    let finalString = '';
    while (current) {
      finalString = finalString + `{${current.data}} -> `;
      current = current.next;
    }
    return finalString + 'null';
  }


  kth(k) {
    let current = this.head;
    // if (!current) throw new Error('haed does not exist');
    let count = this.length; // to start from zero at the tail not one
    console.log(count, k);
    while (current) {
      if (k === count) {
        return current.data;
      }
      count--;
      current = current.next;
    }
    return "exception";
  }

  //reverse a linkedList
  reverseList(list) {
    let node = this.head;
    const list2 = new LinkedList();
    while (node) {
      list2.insertAtHead(node.data);
      node = node.next;
    }
    return list2;
  }

  isPalindrome() {
    let flag = true;
    let slow = this.head;
    let stack = [];

    while (slow) {
      stack.push(slow.data);
      slow = slow.next;
    }

    while (this.head) {
      let i = stack.pop();
      if (this.head.data === i) {
        flag = true;
      } else {
        flag = false;
        break;
      }
      this.head = this.head.next
    }
    return flag;
  }

  isPalindrome() {
    let slow = this.head;
    fast = this.head;
    prev, temp;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    prev = slow;
    slow = slow.next;
    prev.next = null;
    while (slow != null) {
      temp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
    }
    fast = head;
    slow = prev;
    while (slow != null) {
      if (fast.val != slow.val) return false;
      fast = fast.next;
      slow = slow.next;
    }
    return true;
  }



  //print data

  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

}




module.exports = LinkedList;

