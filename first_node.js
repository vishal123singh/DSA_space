// approach-1
var detectCycle = function (head) {
  if (!head || !head.next || !head.next.next) {
    return null;
  }
  let slow = head.next;
  let fast = head.next.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }

  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

console.log(detectCycle(node1));

// approach-2(only if modification is allowed)
function first_node(head) {
  while (head) {
    if (head.next == true) {
      return head;
    }
    temp = head.next;
    head.next = true;
    head = temp;
  }
  return null;
}

// approach-3
var detectCycle = function (head) {
  let set = new Set();
  let current = head;

  while (current) {
    if (set.has(current)) {
      return current;
    } else {
      set.add(current);
    }
    current = current.next;
  }
  return null;
};
