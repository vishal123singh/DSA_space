/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i] + 1)) {
      map.set(nums[i] + 1, false);
    }
    if (map.has(nums[i] - 1)) {
      map.set(nums[i], false);
    } else {
      map.set(nums[i], true);
    }
  }
  let max = 0;
  for (let [key, val] of map) {
    if (map.get(key) == true) {
      let length = 0;

      while (map.has(key)) {
        length++;
        key++;
      }
      if (length > max) {
        max = length;
      }
    }
  }

  return max;
};

let arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(arr));