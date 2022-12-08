var mergeKLists = function (myLists) {
  let arr = [];
  let head;

  while (myLists.length != 0) {
    let node = myLists.pop();
    if (node) {
      arr.push(node);
      if (arr.length == 2) {
        head = mergeLists(arr);
      }
    }
  }
  if (arr.length) {
    return arr[0];
  }
  if (!head) {
    return null;
  }
};

function mergeLists(arr) {
  let head1 = arr.pop();
  let head2 = arr.pop();
  let headNode;
  if (head1.val <= head2.val) {
    headNode = head1;
    var head = head1;
    var temp = head.next;
    var node = head2;
    var node2 = node.next;
  } else {
    headNode = head2;
    var head = head2;
    var temp = head.next;
    var node = head1;
    var node2 = node.next;
  }

  while (head != null) {
    temp = head.next;
    if (
      node.val >= head.val &&
      (head.next == null || node.val <= head.next.val)
    ) {
      head.next = node;
      node.next = temp;
      if (node2) {
        head = node;
        node = node2;
        node2 = node2.next;
      } else {
        arr.push(headNode);
        return arr;
      }
    } else if (node.val > temp.val) {
      head = temp;
    }
  }
  arr.push(headNode);
  return arr;
}

let list1 = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 5,
      next: null,
    },
  },
};

let list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

let list3 = {
  val: 2,
  next: {
    val: 6,
    next: null,
  },
};
let lists = [list1, list2, list3];

console.log(mergeKLists(lists));
