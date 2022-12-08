var reverseKGroup = function (head, k) {
  let node = head;
  let length = 0;

  while (node) {
    length++;
    node = node.next;
  }

  let firstNode = null;
  let prev = null;

  node = head;

  let count = 0;
  let total = 0;
  let temp;
  let count2 = length - (length % k);
  let end = null;

  while (total < count2) {
    temp = node.next;

    node.next = prev;
    if (!prev) {
      firstNode = node;
    }

    prev = node;
    node = temp;

    count++;

    if (count == k) {
      if (end) {
        end.next = prev;
        end = firstNode;
      } else {
        end = firstNode;
      }

      if (total == 0) {
        var headNode = prev;
      }
      count = 0;
      total += k;
      prev = null;
    }
  }
  end.next = temp;
  return headNode;
};
