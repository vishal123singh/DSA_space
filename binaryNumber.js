let n = 5;

// 1 10 11 100 101

function generateBinary(n) {
  let arr = [];
  arr.push(1);

  for (let i = 0; arr.length < n; i++) {
    arr.push(arr[i] * 10);
    arr.push(arr[i] * 10 + 1);
  }

  return arr;
}

console.log(generateBinary(n));
