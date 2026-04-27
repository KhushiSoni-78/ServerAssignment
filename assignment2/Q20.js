class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  contains(x) {
    return this.items.includes(x);
  }
}
const st = new Stack();
st.push(10);
st.push(20);
st.push(30);
console.log(st.contains(20));
console.log(st.contains(50));