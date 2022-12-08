
var subarraySum = function (nums, k) {
  let map = new Map();
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (nums[i] == k) {
      count++;
    }
    if (sum == k && i != 0) {
      count++;
    }

    if (map.has(sum - k)) {
      let arr = map.get(sum - k);
      if (arr.length == 1) {
        if (arr[0] != i - 1) {
          count++;
        }
      } else {
        if (arr[arr.length - 1] != i - 1) {
          count += arr.length;
        } else {
          count += arr.length - 1;
        }
      }
    }

    if (map.has(sum)) {
      let arr = map.get(sum);
      arr.push(i);
    } else {
      map.set(sum, [i]);
    }
  }

  return count;
};

subarraySum([0, 0, 0, 0, 0], 0);
