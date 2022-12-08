
var threeSum = function (nums) {
  let map = new Map();
  let ans = [];
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {

    let temp = [nums[i]];

    for (let j = i + 1; j < nums.length; j++) {

      temp.push(nums[j]);

      let val = 0 - (nums[i] + nums[j]);

      if (map.has(val)) {
        temp.push(val);
        let i1 = map.get(val);
        if (
          i1 != i &&
          i1 != j &&
          !set.has(temp.sort((a, b) => a - b).join(""))
        ) {
          ans.push(temp);
          set.add(temp.join(""));
        }
      }

      if (map.has(nums[i]) == false) {
        map.set(nums[i], i);
      }
      
      if (map.has(nums[j] == false)) {
        map.set(nums[j], j);
      }

      temp = [nums[i]];
    }
  }
  return ans;
};
