var longestConsecutive = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i] + 1)) {
      map.set(nums[i] + 1, false);
    }
    if (map.has(nums[i] - 1)) {
      map.set(nums[i] - 1, true);
      map.set(nums[i], false);
    } else {
      map.set(nums[i], true);
    }
  }

  let max = 0;

  map.forEach((val, key) => {
    if (val) {
      let k = key;
      k++;
      let count = 1;
      while (map.has(k)) {
        count++;
        k++;
      }
      if (count > max) {
        max = count;
      }
    }
  });
  return max;
};

longestConsecutive([1, -1, 2, 0, -2, -6, -3]);
