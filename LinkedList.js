'use strict';

// ** Define a node which will contain a constructor with data and next properties; when called and passed a value it will create a new object.


class Node {
  constructor(data, next) {
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
  insertAtHead(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

}




module.exports = LinkedList;

