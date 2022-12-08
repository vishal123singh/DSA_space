class Node {
  constructor(value, right) {
    this.index = right;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.map = new Map();
    this.size = 0;
    this.ans = [];
    this.medianNodes = [];
    this.deletedNode = null;
  }
}

var medianSlidingWindow = function (nums, k) {
  if (k == 1) {
    return nums;
  }
  let dll = new DoubleLinkedList();
  let left = 0;
  let right = 0;
  if (left == right) {
    let node = new Node(nums[right], right);
    dll.head = node;
    dll.tail = node;
    dll.size++;
    dll.map.set(right, node);
    right++;
  }

  while (right < nums.length) {
    let node = new Node(nums[right], right);

    let currentNode = dll.tail;

    if (currentNode.value <= node.value) {
      currentNode.next = node;
      node.prev = currentNode;
      dll.tail = node;
    } else if (currentNode != dll.head) {
      while (currentNode.value > node.value) {
        currentNode.next = node.next;
        node.prev = currentNode.prev;
        node.prev.next = node;
        currentNode.prev = node;
        node.next = currentNode;
        if (currentNode.next) {
          currentNode.next.prev = currentNode;
        }
        currentNode = node.prev;

        if (currentNode == dll.head && currentNode.value > node.value) {
          currentNode.next = node.next;
          node.next.prev = currentNode;
          currentNode.prev = node;
          node.next = currentNode;
          node.prev = null;
          dll.head = node;
          break;
        }
      }
    } else if (currentNode == dll.head && currentNode.value > node.value) {
      node.next = currentNode;
      currentNode.prev = node;
      dll.head = node;
      dll.tail = currentNode;
    }

    dll.map.set(right, node);
    dll.size++;

    right++;
    if (right - left == k) {
      findMedian(dll, k, nums, right);
      removeNode(dll, left);
      left++;
    }
  }

  return dll.ans;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 4;
console.log(medianSlidingWindow(nums, k));

function removeNode(dll, left) {
  let node = dll.map.get(left);
  dll.deletedNode = node;
  if (node == dll.head && node != dll.tail) {
    node.next.prev = null;
    dll.head = node.next;
  } else if (node == dll.tail && node != dll.head) {
    node.prev.next = null;
    dll.tail = node.prev;
  } else if (node == dll.head && node == dll.tail) {
    dll.head = null;
    dll.tail = null;
  } else {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  return;
}

function findMedian(dll, k, nums, right) {
  if (dll.deleted == null) {
    let count1 = Math.floor(k / 2);
    let count2 = 0;
    let tempNode = dll.head;
    while (count2 < count1) {
      tempNode = tempNode.next;
      count2++;
    }
    if (k % 2 == 0) {
      let median = tempNode.value + tempNode.prev.value;
      dll.ans.push(median / 2);
      dll.medianNodes.push([tempNode.prev, tempNode]);
    } else {
      dll.ans.push(tempNode.value);
      dll.medianNodes.push(tempNode);
    }
    return;
  }

  let n = dll.medianNodes.pop();
  dll.medianNodes.push(n);

  if (k % 2 != 0 && n == dll.deletedNode) {
    let tempNode = n.next;
    if (tempNode.value <= nums[right]) {
      dll.ans.push(tempNode.value);
      dll.medianNodes.push(tempNode);
    } else {
      dll.ans.push(tempNode.prev.value);
      dll.medianNodes.push(tempNode.prev);
    }
    return;
  } else if (k % 2 != 0 && n != dll.deletedNode) {
    let tempNode = n;
    if (dll.deletedNode.value <= n.value) {
      if (tempNode.value <= nums[right]) {
        dll.ans.push(tempNode.next.value);
        dll.medianNodes.push(tempNode.next);
      } else {
        dll.ans.push(tempNode.value);
        dll.medianNodes.push(tempNode);
      }
    } else {
      if (tempNode.value <= nums[right]) {
        dll.ans.push(tempNode.value);
        dll.medianNodes.push(tempNode);
      } else {
        dll.ans.push(tempNode.prev.value);
        dll.medianNodes.push(tempNode.prev);
      }
    }
    return;
  } else if (k % 2 == 0 && n[0] == dll.deletedNode) {
    let tempNode = n[1];
    if (nums[right] >= tempNode.value) {
      let median = tempNode.value + tempNode.next.value;
      dll.ans.push(median / 2);
      dll.medianNodes.push([tempNode, tempNode.next]);
    } else {
      let median = tempNode.value + tempNode.prev.value;
      dll.ans.push(median / 2);
      dll.medianNodes.push([tempNode.prev, tempNode]);
    }
    return;
  } else if (k % 2 == 0 && n[1] == dll.deletedNode) {
    let tempNode = n[0];
    if (nums[right] >= tempNode.value) {
      let median = tempNode.value + tempNode.next.value;
      dll.ans.push(median / 2);
      dll.medianNodes.push([tempNode, tempNode.next]);
    } else {
      let median = tempNode.prev.value + tempNode.value;
      dll.ans.push(median / 2);
      dll.medianNodes.push([tempNode.prev, tempNode]);
    }
    return;
  } else {
    if (dll.deletedNode.value <= n[0].value && nums[right] < n[0].value) {
      let median = n[0].value + n[0].next.value;
      dll.ans.push(median / 2);
      dll.medianNodes.push([n[0], n[0].next]);
    } else if (
      dll.deletedNode.value <= n[0].value &&
      nums[right] >= n[0].value
    ) {
      let median = n[0].next.value + n[0].next.next.value;
      dll.ans.push(median / 2);
      dll.medianNodes.push([n[0].next, n[0].next.next]);
    } else if (
      dll.deletedNode.value > n[1].value &&
      nums[right] >= n[1].value
    ) {
      let median = n[1].value + n[1].prev.value;
      dll.ans.push(median / 2);
      dll.medianNodes.push([n[1].prev, n[1]]);
    } else if (dll.deletedNode.value > n[1].value && nums[right] < n[1].value) {
      let median = n[1].prev.value + n[1].prev.prev.value;
      dll.ans.push(median / 2);
      dll.medianNodes.push([n[1].prev.prev, n[1].prev]);
    }
    return;
  }
}
