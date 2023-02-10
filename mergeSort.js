let numbers = [1, 6, 2, 9, 7, 3];

function sort(numbers, start, end) {
  if (start >= end) {
    return;
  }
  let mid = parseInt((start + end) / 2);
  sort(numbers, start, mid);
  sort(numbers, mid + 1, end);
  merge(numbers, start, mid, end);
  return numbers;
}

function merge(numbers, start, mid, end) {
  let num_arr_1 = [];
  let num_arr_2 = [];

  for (let i = start; i <= mid; i++) {
    num_arr_1.push(numbers[i]);
  }
  for (let i = mid + 1; i <= end; i++) {
    num_arr_2.push(numbers[i]);
  }

  let resultArr = [],
    p1 = 0,
    p2 = 0;

  while (p1 < num_arr_1.length && p2 < num_arr_2.length) {
    if (num_arr_1[p1] < num_arr_2[p2]) {
      resultArr.push(num_arr_1[p1]);
      p1++;
    } else if (num_arr_1[p1] >= num_arr_2[p2]) {
      resultArr.push(num_arr_2[p2]);
      p2++;
    }
  }

  if (p1 == num_arr_1.length) {
    resultArr.push(...num_arr_2.slice(p2));
  } else if (p2 == num_arr_2.length) {
    resultArr.push(...num_arr_1.slice(p1));
  }
  let k = start;
  for (let i = 0; i < resultArr.length; i++) {
    numbers[k] = resultArr[i];
    k++;
  }
  return;
}

sort(numbers, 0, numbers.length - 1);
