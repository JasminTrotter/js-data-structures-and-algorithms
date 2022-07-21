class Node {
  constructor(e) {
    this.element = e;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  getLength() {
    console.log(this.length);
  }

  indexOf(element) {
    let index = -1;
    let currentNode = this.head;

    while (currentNode) {
      index++;
      if (currentNode.element === element) return index;
      currentNode = currentNode.next;
    }

    return -1;
  }


  append(element) {
    const newNode = new Node(element);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let previousNode = null;
      while (currentNode) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = newNode;
    }
    this.length++
  }

  insertAtIndex(element, index) {
    if (index < 0 || index > this.length - 1) throw new Error(`index must be in range 0-${this.length - 1}`);

    const newNode = new Node(element);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let placeholder = 0
      let previousNode = null;

      while (placeholder < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        placeholder++;
      }

      newNode.next = currentNode;
      previousNode.next = newNode;
    }
    this.length++
  }

  remove(element) {
    if (!this.head) throw new Error('cannot remove item from empty list');
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      if (currentNode.element === element) {
        previousNode.next = currentNode.next;
        this.length--;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  removeAtIndex(index) {
    if (!this.head) throw new Error('cannot remove item from empty list');
    if (index < 0 || index > this.length - 1) throw new Error(`index must be in range 0-${this.length - 1}`);
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      let placeholder = 0
      let previousNode = null;

      while (placeholder < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        placeholder++;
      }

      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  printLinkedList() {
    console.log(this);
  }
}

const aLinkedList = new LinkedList()
aLinkedList.append('Hello World');
aLinkedList.append('Hello Node');
aLinkedList.append('Hello Linked Node');
aLinkedList.insertAtIndex('This will be removed', 2);
aLinkedList.remove('This will be removed')

aLinkedList.indexOf('Hello Linked Node')
aLinkedList.getLength();
aLinkedList.insertAtIndex('This is added at index 1', 1)
// aLinkedList.removeAtIndex(0)
aLinkedList.printLinkedList()