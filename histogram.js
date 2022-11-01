const largestRectangleArea = function (heights) {
  let stack = [];
  let rightAnswer = [];
  let leftAnswer = [];
  let count = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (!stack.length) {
      rightAnswer.push(count);
      stack.push(i);
    } else {
      if (heights[stack[stack.length - 1]] < heights[i]) {
        rightAnswer.push(stack[stack.length - 1] - i - 1);
        stack.push(i);
      } else {
        while (heights[stack[stack.length - 1]] >= heights[i]) {
          stack.pop();
          count++;
          if (!stack.length) {
            break;
          }
        }
        if (!stack.length) {
          rightAnswer.push(count);
          stack.push(i);
        } else {
          rightAnswer.push(stack[stack.length - 1] - i - 1);
          stack.push(i);
        }
      }
    }
  }
  stack = [];
  count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (!stack.length) {
      leftAnswer.push(count);
      stack.push(i);
    } else {
      if (heights[stack[stack.length - 1]] < heights[i]) {
        leftAnswer.push(i - stack[stack.length - 1] - 1);
        stack.push(i);
      } else {
        while (heights[stack[stack.length - 1]] >= heights[i]) {
          stack.pop();
          count++;
          if (!stack.length) {
            break;
          }
        }
        if (!stack.length) {
          leftAnswer.push(count);
          stack.push(i);
        } else {
          leftAnswer.push(i - stack[stack.length - 1] - 1);
          stack.push(i);
        }
      }
    }
  }
  let answer = [];
  let i = 0,
    j = heights.length - 1;
  while (i < heights.length && j >= 0) {
    if (rightAnswer[i] + leftAnswer[j] === 0) {
      answer.push(1 * heights[j]);
    } else {
      answer.push((rightAnswer[i] + leftAnswer[j] + 1) * heights[j]);
    }

    i++;
    j--;
  }

  return Math.max(...answer);
};

console.log(largestRectangleArea([1, 1]));
