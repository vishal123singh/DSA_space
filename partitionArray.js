let nums = [2, 2, 2],
  k = 0;

function minimumSubsequences(nums, k) {
  let subsequences = [];
  while (nums.length !== 0) {
    let element = nums.pop();

    if (subsequences.length === 0) {
      subsequences.push({ min: element, max: element });
    } else {
      let flag = false;
      for (let i = 0; i < subsequences.length; i++) {
        if (
          Math.abs(subsequences[i].min - element) <= k &&
          Math.abs(subsequences[i].max - element) <= k
        ) {
          flag = true;
          if (element < subsequences[i].min) {
            subsequences[i].min = element;
          } else if (element > subsequences[i].max) {
            subsequences[i].max = element;
          }
        }
        if (flag) {
          break;
        }
      }
      if (!flag) {
        subsequences.push({ min: element, max: element });
      }
    }
  }
  console.log(subsequences);
  return subsequences.length;
}

console.log(minimumSubsequences(nums, k));
