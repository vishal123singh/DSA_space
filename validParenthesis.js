// time complexity: O(n)
// auxillary space: O(n)

function validParentheses(str) {

  let openCharacters = { '(': 1, '{': 2, '[': 3 };
  let closeChracters = { ')': 1, '}': 2, ']': 3 };


  if (str.length < 1) {
      return false;
  }
  else if (closeChracters[str[0]] || openCharacters[str[str.length-1]]) {
      return false;
  }
  
  let stack = [];

  
  for (let i = 0; i < str.length; i++){
      if (openCharacters[str[i]]) {
          stack.push(str[i]);
      }
      else {
          let character = stack.pop();
          if (openCharacters[character] !== closeChracters[str[i]]) {
              return false;
          }
         
      }
  }
  if (stack.length == 0) {
      return true;
  } else {
      return false;
  }
  
}

console.log(validParentheses("([]"))

