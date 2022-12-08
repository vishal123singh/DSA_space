function permutations(nums, i) {
  if (i == nums.length - 1) {
    return [[nums[i]]];
  }

  let arr = permutations(nums, i + 1);
  let result = [];
  while (arr.length != 0) {
    let subArr = arr.pop();
    for (let j = 0; j < nums.length - i; j++) {
      let temp = [...subArr];
      temp.splice(j, 0, nums[i]);
      result.push(temp);
    }
  }
  return result;
}

permutations([1, 2, 3, 4], 0);
