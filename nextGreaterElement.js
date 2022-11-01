var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let ans = [];
  let map = new Map();

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], 0);
  }

  for (let i = nums2.length - 1; i >= 0; i--) {
    if (map.has(nums2[i])) {
      if (!stack.length) {
        map.set(nums2[i], -1);
        stack.push(nums2[i]);
      } else if (stack[stack.length - 1] > nums2[i]) {
        map.set(nums2[i], stack[stack.length - 1]);
        stack.push(nums2[i]);
      } else {
        while (stack[stack.length - 1] <= nums2[i] && stack.length) {
          stack.pop();
        }
        if (!stack.length) {
          map.set(nums2[i], -1);
          stack.push(nums2[i]);
        } else {
          map.set(nums2[i], stack[stack.length - 1]);
          stack.push(nums2[i]);
        }
      }
    } else {
      stack.push(nums2[i]);
    }
  }
  map.forEach((value) => {
    ans.push(value);
  });
  return ans;
};
