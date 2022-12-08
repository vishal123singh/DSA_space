
var simplifyPath = function (path) {
  let stack = [];

  if (path[path.length - 1] != "/") {
    path += "/";
  }

  let i = 0;

  while (i < path.length) {
    let j = i + 1;
    let str = path[i];

    while (path[j] != "/" && j < path.length) {
      str += path[j];
      j++;
    }

    if (path[j] == "/") {
      if (str == "/..") {
        stack.pop();
        i = j;
      } else if (str == "/.") {
        i = j;
      } else if (j - i == 1) {
        i = j;
      } else {
        stack.push(str);
        i = j;
      }
    } else {
      i++;
    }
  }
  if (stack.length == 0) {
    return "/";
  }
  return stack.join("");
};

simplifyPath("/.");
