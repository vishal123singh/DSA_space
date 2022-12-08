let input = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3; //window-size

function firstNegativeInteger(input, k) {
  let indices = new Array(); // it stores indices of negative integers
  let window = new Array(); // it stores start and end of every window 
  let left = 0,             // left refers to start of a window
    right = left + k - 1;   // right refers to end of a window

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      indices.push(i);
    }

    if (right < input.length) {
      window.push([left, right]);  
      left++;
      right = left + k - 1;
    }
  }

  let p = 0; // indices_pointer;
  let q = 0; // window_pointer;
  let ans = new Array();

  while (q < window.length) {
    if (indices[p] >= window[q][0] && indices[p] <= window[q][1]) {
      // window[q][0] = left/start && window[q][1] = right/end
      ans.push(input[indices[p]]);
      q++;
    } else if (indices[p] < window[q][0]) {
      // if key is smaller than the starting of a window
      p++; // key means index storing negative integer;
    } else if (indices[p] > window[q][1]) {
      // if key is greater than the right side of a window
      ans.push(0);
      q++;
    } else {
      // incase of all keys have been tried and still there are a few windows left;
      ans.push(0);
      q++;
    }
  }

  return ans;
}

console.log(firstNegativeInteger(input, k));
