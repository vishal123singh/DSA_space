
var nextGreaterElements = function (nums) {
  let stack = [];
  let ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!stack.length) {
      ans.push(null);
      stack.push(nums[i]);
    } else if (stack[stack.length - 1] > nums[i]) {
      ans.push(stack[stack.length - 1]);
      stack.push(nums[i]);
    } else {
      while (stack.length) {
        stack.pop();
        if (stack[stack.length - 1] > nums[i]) {
          ans.push(stack[stack.length - 1]);
          stack.push(nums[i]);
          break;
        }
      }
      if (!stack.length) {
        ans.push(null);
        stack.push(nums[i]);
      }
    }
  }

  ans.reverse();

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == null) {
      for (j = 0; j < i; j++) {
        if (nums[j] > nums[i]) {
          ans[i] = nums[j];
          break;
        }
      }
      if (ans[i] == null) {
        ans[i] = -1;
      }
    }
  }
  nums = ans;
  return nums;
};
