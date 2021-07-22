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
  insertAtIndex(data,index){

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

