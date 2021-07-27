
class Node {
  constructor(data, next = null) {
    this.data = data,
      this.next = next
  }
}


class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data, this.head);
    // newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }


  insertAtLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    }

    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;

    }
    this.length++;
  }


  isnertAtIndex(index, data) {

    if (index > 0 && index > this.length) {
      return;
    }


    if (index === 0) {
      this.head = new Node(data, this.next);
      return;
    }

    let count = 0;
    let node = new Node(data);
    let previous;
    let current = this.head;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.length++;
  }


  addbefore(data, valueToAddBefore) {
    let current = this.head;
    if (!current.next) {
      return false;
    }
    while (current.next) {
      if (valueToAddBefore === current.next.data) {
        const newNode = new Node(data, current.next);
        current.next = newNode;
        this.length++;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  reverseList() {
    let pre;
    let next;
    let current = this.head;

    while (current) {
      //save the current.next
      next = current.next;
      // reverse the pointer
      current.next = pre;

      // increment previous to current
      pre = current;
      // increement current to next
      current = next;
    }
    return pre;
  }

  addafter(data, valueToAddAfter) {
    let current = this.head;

    while (current) {
      if (valueToAddAfter === current.data) {
        const newNode = new Node(data, current.next);
        current.next = newNode;
        this.length++;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  isPalindrome() {
    let number = Math.floor(this.length / 2);
    let current = this.head;
    let count = 0;
    let array = [];
    let array2 = []

    while (current) {
      count++;
      if (count < number) {
        array.push(current.data);
      }
      if (count === number) {
        continue;
      }
      if (count > number) {
        array2.push(current.data);
      }
      current = current.next;
    }



  };


  includes(value) {
    let current = this.head;
    while (current) {
      if (value === current.data) {
        return true;
      }
      return false;
    }
  }
  toString() {
    let current = this.head;
    if (!current) throw new Error('no head');
    let finalString = '';
    while (current) {
      finalString = finalString + `{${current.data}} -> `;
      current = current.next;
    }
    return finalString + null;
  }


  kth(k) {
    let current = this.head;
    let count = this.length;

    while (current) {
      if (k = current.data) {
        return current.data;
      }
      count--;
      current = current.next;
    }
    return "exception";
  }

}

function merge(L1, L2) {
  let current1 = L1.head;
  let current2 = L2.head;

  let array = [];
  let list3 = new List();
  let count1 = (L1.length);
  let count2 = (L2.length);
  let count;


  if (count1 < count2) {
    count = count2;
  }
  else {
    count = count1;
  }

  while (count) {
    count--;
    if (count1 > count2 && current2 === null) {
      array.push(current1.data);
      current1 = current1.next;

    }
    else if (count1 < count2 && current1 === null) {
      array.push(current2.data);
      current2 = current2.next;
    }
    else {
      array.push(current1.data);
      current1 = current1.next;
      array.push(current2.data);
      current2 = current2.next;
    }
  }
  array.map((element, idx) => {
    list3.insertAtLast(element);
  });
  return list3;
}

module.exports = { List: List, merge };