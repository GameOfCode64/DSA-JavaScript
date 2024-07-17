// ! Day 2 of learning DSA in Javascript

// * Topic (Array Data Structure)

// Todo: Array Method list:

// * 1, push()      -->    adds a new element to the end of an array and returns the new length of an array,
// * 2, Get()       -->    get the element by it's index from an array and returns the element
// * 3, pop()       -->    removes the last element of an array and return the removed element,
// * 4, shift()     -->    removes the first element of an array and return the removed element,

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  shift() {
    const firstElement = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }
  delete(index) {
    const deletedElement = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return deletedElement;
  }
}

const MyNewArray = new MyArray();

console.log(MyNewArray.push("apple"));
console.log(MyNewArray.push("mango"));
console.log(MyNewArray.push("orange"));
console.log(MyNewArray.push("banana"));

console.log(MyNewArray);

console.log(MyNewArray.get(2));
console.log(MyNewArray.pop());
console.log(MyNewArray.shift());
console.log(MyNewArray.delete(1));

console.log(MyNewArray);
