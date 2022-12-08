let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

const maxSlidingWindow = function (nums, k) {
  let answer = [];
  let maxIndex = 0;

  for (let i = 0; i < k; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  answer.push(nums[maxIndex]);

  let i = 1,
    j = k;

  while (j < nums.length) {
    if (maxIndex >= i) {
      if (nums[maxIndex] > nums[j]) {
        maxIndex = maxIndex;
        answer.push(nums[maxIndex]);
      } else {
        maxIndex = j;
        answer.push(nums[j]);
      }
      i++;
      j++;
    } else if (nums[j] >= nums[maxIndex]) {
      maxIndex = j;
      answer.push(nums[maxIndex]);
      i++;
      j++;
    } else {
      maxIndex = i;
      for (let t = i; t <= j; t++) {
        if (nums[t] > nums[maxIndex]) {
          maxIndex = t;
        }
      }
      answer.push(nums[maxIndex]);
      i++;
      j++;
    }
  }

  return answer;
};

console.log(maxSlidingWindow(nums, k));
