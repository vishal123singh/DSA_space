const mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;
  else if (!list1 && list2) return list2;
  else if (list1 && !list2) return list1;

  let node1 = list1;
  let node2 = list2;
  let headNode = {};

  while (node1 && node2) {
    if (node1.val < node2.val) {
      let temp1 = node1.next;
      headNode.next = node1;
      headNode = headNode.next;
      node1 = temp1;
    } else if (node2.val <= node1.val) {
      let temp2 = node2.next;
      headNode.next = node2;
      headNode = node2;
      node2 = temp2;
    }
  }
  if (node1 && !node2) {
    headNode.next = node1;
  } else if (!node1 && node2) {
    headNode.next = node2;
  }

  list1.val >= list2.val ? (headNode = list2) : (headNode = list1);
  return headNode;
};
