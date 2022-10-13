class sllNode{
    constructor(val){
      this.val=val
      this.next = null;
    }
}
  
let node1 = new sllNode(1);
let node2 = new sllNode(2);
node1.next = node2;
let node3 = new sllNode(3);
node2.next = node3;
let node4 = new sllNode(2);
node3.next = node4;
let node5 = new sllNode(1);
node4.next = node5;
  
  
  
function isPalindrome(head) {

    if(!head.next){
        return true;
    }
      
    // find mid
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        var preSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // reverse list from the node whom slow is pointing to
    let current_node = slow;
    let previous = null;

    while (true) {
        let temp = current_node.next;
        current_node.next = previous;
        previous = current_node;
        current_node = temp;
        
        if (!current_node) {
            preSlow.next = previous
            break;
        }
    }

    // compare corresponding nodes' data
    let A = head;
    let B = preSlow.next;

    while (true) {
        if (A.val != B.val) {
            return false;
        }

        A = A.next;
        if (A == preSlow.next) {
            return true;
        }
        B = B.next;

    }
    
}

console.log(isPalindrome(node1))



  