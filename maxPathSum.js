var maxPathSum = function (root) {
  let roots = [];
  let max = binaryTreePath(root, roots);

  let max2 = Math.max(...roots);

  if (max2 > max) {
    return max2;
  }
  return max;
};

function binaryTreePath(root, roots) {
  let left = 0;

  if (root.left) {
    left_val = binaryTreePath(root.left, roots);
    left = left_val;
  }

  let right = 0;

  if (root.right) {
    right_val = binaryTreePath(root.right, roots);
    right = right_val;
  }

  if (left < 0 && right < 0) {
    roots.push(root.val);
  } else if (left < 0) {
    roots.push(right + root.val);
  } else if (right < 0) {
    roots.push(left + root.val);
  } else {
    roots.push(left + right + root.val);
  }

  if (left >= right) {
    if (left < 0) {
      return root.val;
    }
    return left + root.val;
  } else if (left < right) {
    if (right < 0) {
      return root.val;
    }
    return right + root.val;
  } else if (left == 0 && right == 0) {
    return root.val;
  }
}

