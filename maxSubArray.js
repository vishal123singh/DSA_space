var maxSubArray = function (nums) {
  let i = 0;
  let sum = nums[i];
  let maxSum = sum;
  i++;

  while (i < nums.length) {
    if (nums[i] > sum + nums[i]) {
      sum = nums[i];
    } else {
      if (sum > sum + nums[i] && sum > maxSum) {
        maxSum = sum;
      }
      sum += nums[i];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
    i++;
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
