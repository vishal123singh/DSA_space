// time complexity : O(arr1.length + arr2.length)
// space complexity : O(1)

let arr1 = [1];
let arr2 = [2, 3, 4];

function findMedian(arr1, arr2) {
  if (arr1.length == 0) {
    if (arr2.length % 2 == 0) {
      let median = arr2[arr2.length / 2] + arr2[arr2.length / 2 - 1];
      return median / 2;
    } else {
      return arr2[parseInt(arr2.length / 2)];
    }
  } else if (arr2.length == 0) {
    if (arr1.length % 2 == 0) {
      let median = arr1[arr1.length / 2] + arr1[arr1.length / 2 - 1];
      return median / 2;
    } else {
      return arr1[parseInt(arr1.length / 2)];
    }
  }

  let length = arr1.length + arr2.length;
  let target = parseInt(length / 2) + 1;
  let count = 0;
  let elements = [];
  let p1 = 0,
    p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      p1++;
      count++;
      if (count == target - 1) {
        elements.push(arr1[p1 - 1]);
      } else if (count == target) {
        elements.push(arr1[p1 - 1]);
        break;
      }
    } else if (arr1[p1] >= arr2[p2]) {
      p2++;
      count++;
      if (count == target - 1) {
        elements.push(arr2[p2 - 1]);
      } else if (count == target) {
        elements.push(arr2[p2 - 1]);
        break;
      }
    }
  }

  if (count == target && length % 2 == 0) {
    return (elements[0] + elements[1]) / 2;
  } else if (count == target && length % 2 != 0) {
    return elements[1];
  }

  if (p1 < arr1.length) {
    for (let i = p1; i < arr1.length; i++) {
      count++;
      if (count == target - 1) {
        elements.push(arr1[i]);
      } else if (count == target) {
        elements.push(arr1[i]);
        break;
      }
    }
  } else if (p2 < arr2.length) {
    for (let i = p2; i < arr2.length; i++) {
      count++;
      if (count == target - 1) {
        elements.push(arr2[i]);
      } else if (count == target) {
        elements.push(arr2[i]);
        break;
      }
    }
  }

  if (count == target && length % 2 == 0) {
    return (elements[0] + elements[1]) / 2;
  } else if (count == target && length % 2 != 0) {
    return elements[1];
  }
}

findMedian(arr1, arr2);
