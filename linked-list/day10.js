// ! DSA in JavaScript day 10

// Todo: Linked List

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  // Todo: How to create LinkedList
  constructor(value) {
    this.head = new Node(value);
    this.teal = this.head;
    this.length = 1;
  }

  // Todo: How to add element in LinkedList
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.teal = newNode;
    }

    this.teal.next = newNode;
    this.teal = newNode;
    this.length++;
  }
}

const MyList = new LinkedList(1);

MyList.push(10);
console.log(MyList);
