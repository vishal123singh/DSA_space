let arr = [10, 1, 2, 4, 7, 2],
  limit = 5;

function longest_subarray(arr, limit) {
  let left = 0,
    right = 0,
    length = 0;
  let max = 0,
    min = max,
    top;

  for (let i = 1; i < arr.length; i++) {
    top = arr[i - 1];
    if (Math.abs(arr[i] - top) <= limit) {
      if (Math.abs(arr[i] - arr[max]) <= limit) {
        if (Math.abs(arr[i] - arr[min]) <= limit) {
          right++;
          if (arr[i] >= arr[max]) {
            max = i;
          } else if (arr[i] <= arr[min]) {
            min = i;
          }
        } else {
          if (right - left + 1 > length) {
            length = right - left + 1;
          }
          left = min + 1;
          right = i;
          let value;
          value = find_min(arr, left, right);
          min = value;
          if (arr[i] >= arr[max] && max > min) {
            max = i;
          } else {
            let val = find_max(arr, left, right);
            max = val;
          }
        }
      } else {
        if (right - left + 1 > length) {
          length = right - left + 1;
        }
        if (max > min && Math.abs(arr[i] - arr[min]) > limit) {
          left = max + 1;
          right = i;
          let value;
          value = find_maxMin(arr, left, right);
          (max = value[0]), (min = value[1]);
        } else {
          left = max + 1;
          right++;
          let value;
          value = find_max(arr, left, right);
          max = value;
          if (Math.abs(arr[max] - arr[right] > limit)) {
            if (max - left + 1 > length) {
              length = max - left + 1;
            }
            left = max + 1;
          }
          if (arr[i] < arr[min] && max < min) {
            min = i;
          } else {
            let val = find_min(arr, left, right);
            min = val;
          }
        }
      }
    } else {
      if (right - left + 1 > length) {
        length = right - left + 1;
      }
      left = i;
      right = i;
      max = i;
      min = i;
    }
  }
  if (right - left + 1 > length) {
    length = right - left + 1;
  }
  return length;
}

function find_maxMin(arr, left, right) {
  let max = left,
    min = left;
  for (let i = left; i <= right; i++) {
    if (arr[i] >= arr[max]) {
      max = i;
    } else if (arr[i] <= min) {
      min = i;
    }
  }
  return [max, min];
}

function find_max(arr, left, right) {
  let max = left;
  for (let i = left; i <= right; i++) {
    if (arr[i] >= arr[max]) {
      max = i;
    }
  }
  return max;
}

function find_min(arr, left, right) {
  let min = left;
  for (let i = left; i <= right; i++) {
    if (arr[i] <= arr[min]) {
      min = i;
    }
  }
  return min;
}

console.log(longest_subarray(arr, limit));
