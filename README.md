# LinkedLists


What is a linked list?
- It's a data structure that contains a collection of items
- can be visualized as many boxes connected to each other

let's assume each box of those can be represented by a class called box
class Node {
int data,
Box next
}
4_3_2_1

• we start from left to right, the first box  is going to be called head 
• head.data =4
• head.next => will refer to the next box (the one with data 3)
• head.next.data=3
• head .next.next.next => refers to the box that holds one
• head.next.next.next.data= 1

if we create a constructor inside the class and define the data
so constructor(givenData){
this.data=givenData;
}
then we create a new Node(5) => it will create an object for us that has 5 as its data and its next value will be set to null by default