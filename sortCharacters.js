var frequencySort = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + s[i]);
    } else {
      map.set(s[i], s[i]);
    }
  }
  let arr = [];
  map.forEach((str) => arr.push(str));
  arr.sort((s1, s2) => {
    if (s1.length > s2.length) {
      return -1;
    } else if (s1.length < s2.length) {
      return 1;
    } else {
      return 0;
    }
  });

  return arr.join("");
};

frequencySort("raaeaedere");
