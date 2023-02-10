function minimiseTheInteger(n, k) {
  let digitArr = [];

  while (n > 0) {
    digitArr.unshift(n % 10);
    n = parseInt(n / 10);
  }
  let count = k;
  let i = 0;
  while (i < digitArr.length && count > 0) {
    if (i == 0 && digitArr[i] > 1) {
      digitArr[i] = 1;
      count--;
    } else if (digitArr[i] > 0) {
      digitArr[i] = 0;
      count--;
    }
    i++;
  }
  let num = 0;
  for (let j = 0; j < digitArr.length; j++) {
    let power = digitArr.length - (j + 1);
    num += digitArr[j] * 10 ** power;
  }
  return num;
}

console.log(minimiseTheInteger(2399, 2));
