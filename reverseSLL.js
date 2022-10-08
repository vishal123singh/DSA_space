// the idea is to create nodes by Object.create method. So, the previous node can be used as a     prototype of next node in the list.
// And by using the prototype property of an object,we can traverse the list backward also, starting from tail.
// time complexity: O(n)
// space complexity: O(1)

class SingleLinkedList {
    constructor(node = null) {
        this.head = node
    } 
}

 function nodeCreator(proto,data){    
      let node = Object.create(proto);
      node.value = data
      proto.next = node;
      return node;
 }

 let node1= {value:5,next:null} ;
 let node2 = nodeCreator(node1,7) ;
 let node3 = nodeCreator(node2, 12);
 let node4 = nodeCreator(node3,20);
 let node5 = nodeCreator(node4,25);
 node5.next = null;
 let list = new SingleLinkedList(node1);
 
function reverseLinkedList(head,tail,count,list){
    if(count==3){
        return list;
    }
    let temp = head.value;
    head.value = tail.value;
    tail.value = temp;
    head = head.next;
    tail = tail.__proto__;// OR Object.getPrototypeOf(tail);
    count--;
    return reverseLinkedList(head,tail,count,list) ;
    
}

reverseLinkedList(node1,node5,5,list);

