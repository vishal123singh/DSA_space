const maximalRectangle = function (matrix) {
    
    let answer = []; let count = 0;
    for (let i = matrix.length - 1; i >= 0; i--){
      let array = [];
      for (let j = 0; j < matrix[i].length; j++) {
        let flag = true;
        if (matrix[i][j] == 1) {
          var sum = 0;
          for (let k = i; k >= 0; k--) {
            if (matrix[k][j] == 1) {
              sum += parseInt(matrix[k][j]);
            } else {
              flag = false;
              array.push(sum);
              break;
            }
          }
          if (flag) {
            array.push(sum);
          }
        } else {
          array.push(0);
        }
      }
        console.log(...array)
        if (sum==0) {
            count++;
            continue;
        }
        
      let v1 = nextSmallerElementToRight(array);
      let v2 = nextSmallerElementToLeft(array);
      v1.reverse();
        
      let temp = [];
      for (let i = 0; i < v1.length; i++) {
        
          temp.push(array[i] * ((v1[i] - v2[i]) - 1));
         
      }

      answer.push(Math.max(...temp));
    }

    if (count == matrix.length) {
      return 0;
    }
    
    return Math.max(...answer);
}

function nextSmallerElementToRight(arr) {
    let stack = [];
    let answer = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      if (stack.length == 0) {
        answer.push(arr.length);
        stack.push(i);
      } else if (arr[stack[stack.length - 1]] >= arr[i]) {
        while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
          stack.pop();
        }
        if (stack.length == 0) {
          answer.push(arr.length);
          stack.push(i);
        } else {
            answer.push(stack[stack.length - 1]);
            stack.push(i);
        }
      } else {
          answer.push(stack[stack.length - 1]);
          stack.push(i);
      }
    }
    return answer;
}

function nextSmallerElementToLeft(arr) {
    let stack = [];
    let answer = [];

    for (let i = 0; i < arr.length; i++){
        if (stack.length == 0) {
            answer.push(-1);
            stack.push(i)
        }
        else if (arr[stack[stack.length - 1]] >= arr[i]) {
            while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            if (stack.length == 0) {
                answer.push(-1);
                stack.push(i);
            }
            else {
                answer.push(stack[stack.length - 1]);
                stack.push(i);
            }
        }
        else {
            answer.push(stack[stack.length - 1]);
            stack.push(i);
        }
    }

    return answer;
}

console.log(maximalRectangle(matrix));