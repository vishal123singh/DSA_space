
class SingleLinkedList {
  constructor(node = null) {
     this.head = node ;
     return this;
  }
getHead(){
  return this.head;
}

getTail(){
  if(this.head == null){
    return `list is empty`;
  }
  if(this.head.next == null){
    return this.head;
  }
  
  let tail = this.head;
  
  while(tail.next != null){
    tail = tail.next;
  }
  return tail;
}

getLength(){
  if(this.head == null){
    return 0;
  }
  let count = 0;
  let node = this.head;
  count++;
  
  while(node.next != null){
    node = node.next;
    count++;
  }
  return count;
}

append(value){
  let newNode = new Sll_Node(value);
  if(this.head == null){
    return new SingleLinkedList(newNode);
  }
  let node = this.head;
  
  while(node.next != null){
    node = node.next;
  }
  
  node.next = newNode;
  return this;
  }

prepend(value){
  let newNode = new Sll_Node(value);
  if(this.head == null){
    return new SingleLinkedList(newNode);
  }
  
  newNode.next = this.head;
  return new SingleLinkedList(newNode);
}

insertAt(place,value){
  
  let length = this.getLength();
  
  if(place < 1 || place >= length+2){
    return `invalid position`;
  }
  
  if(place == 1){
    return this.prepend(value)
  }
  
  if(place == length){
    return this.append(value);
  }
  
  let newNode = new Sll_Node(value);
 
  let count = 0;
  let curr = this.head;
  count++;
  while(count < place-1){
    curr = curr.next;
    count++;
  }
  let temp = curr.next;
  newNode.next = temp;
  curr.next = newNode;
  return this;
}

  reverse(){
    let current = this.head;
    let previous = null;
    
    while(current != null){
      let temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
   
    return new SingleLinkedList(previous);
  }
}

class Sll_Node {
  constructor(value) {
      this.value = value
      this.next =  null;
      return this;
  }
}


let node1 = new Sll_Node(6)
let node2 = new Sll_Node(10)
node1.next = node2 ;

let node3 = new Sll_Node(15)
node2.next = node3

let node4 = new Sll_Node(22)
node3.next = node4;

let node5 = new Sll_Node(28)
node4.next = node5;

let list = new SingleLinkedList(node1);

console.log(list.reverse());