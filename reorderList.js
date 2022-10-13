
function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }
    let current_node = head;
    let previous = null;

    while (true) {
        let temp = current_node.next;
        current_node.next = previous;
        previous = current_node;
        current_node = temp;
        
        if (!current_node) {
            return previous;
        }
    }
}

function reorderList(head) {
    if (!head.next || !head.next.next) {
        return;
    }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    var preSlow = slow;
    slow = slow.next;
      fast = fast.next.next;
  }

  let half_reversed = reverseList(slow);
  preSlow.next = half_reversed;

  let node1 = head;
  let node2 = preSlow.next;
  let revStart = node2;

  while (true) {
    let temp1 = node1.next;
    let temp2 = node2.next;

    node1.next = node2;
    if (temp1 === revStart) {
      return head;
    }
    node2.next = temp1;
    node1 = temp1;
    node2 = temp2;
  }
}

reorderList(node);


