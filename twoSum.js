
let arr=[2,7,11,15];

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    if (map.has(val)) {
      let ind = map.get(val);
      if (ind < i) {
        return [ind, i];
      }
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum(arr,13));