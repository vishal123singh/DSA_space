
const lengthOfLongestSubstring = function (str) {
  let map = new Map(),
    left = 0,
    right = 0,
    max = 0;
  if (str.length == 0) {
    return 0;
  }

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i]) && map.get(str[i]) >= left) {
      if (right - left + 1 > max) {
        max = right - left + 1;
      }
      left = map.get(str[i]) + 1;
      map.set(str[i], i);
      right = i;
    } else {
      map.set(str[i], i);
      right = i;
    }
  }
  if (right - left + 1 > max) {
    max = right - left + 1;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcade"))
