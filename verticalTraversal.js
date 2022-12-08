var verticalTraversal = function (root) {
  root.row = 0;
  root.col = 0;
  let arr = [root];
  let map = new Map();
  let min = 0,
    max = 0;

  while (arr.length) {
    let node = arr.shift();
    if (node.col < min) {
      min = node.col;
    } else if (node.col > max) {
      max = node.col;
    }

    if (map.has(node.col)) {
      let arr1 = map.get(node.col);
      arr1.push(node);
    } else {
      map.set(node.col, [node]);
    }
    if (node.left) {
      node.left.row = node.row + 1;
      node.left.col = node.col - 1;
      arr.push(node.left);
    }
    if (node.right) {
      node.right.row = node.row + 1;
      node.right.col = node.col + 1;
      arr.push(node.right);
    }
  }
  map.forEach((val, key) => {
    val.sort((a, b) => {
      if (a.row > b.row || a.row < b.row) {
        return 0;
      } else {
        if (a.data > b.data) {
          return 1;
        } else if (a.data < b.data) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  });
  let ans = [];
  for (let i = min; i < max + 1; i++) {
    ans.push(map.get(i));
  }
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[i].length; j++) {
      ans[i][j] = ans[i][j].data;
    }
  }
  return ans;
};
