'use strict';

// ** Define a node which will contain a constructor with data and next properties; when called and passed a value it will create a new object.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

let node_A = new Node(1);//1.  this will create a node where its data is 1 and its next value is set to null becaue it is not connected- to connect them go to step 2.
let node_B = new Node(2);
let node_C = new Node(3);
let node_D = new Node(4);

//2. how to connect these nodes; define the next attribute of each node to be the following node. 
node_A.next = node_B
node_B.next = node_C
node_C.next = node_D

// **although this works fine but its not functional hence we need to create a class for  LinkedLists



countNodes=(head)=>{

}



console.log(node_A);