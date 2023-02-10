function relaxDays(arr, n) {
  // 0 – No tasks are available.
  // 1 – Task of type B is available.
  // 2 – Task of type A is available.
  // 3 – Both task A and task B are available.
  let res = [];
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1 && (res.length == 0 || res[res.length - 1] != "B")) {
      res.push("B");
    } else if (arr[i] == 2 && (res.length == 0 || res[res.length - 1] != "A")) {
      res.push("A");
    } else if (arr[i] == 3 && (res.length == 0 || res[res.length - 1] != "A")) {
      res.push("A");
    } else if (arr[i] == 3 && (res.length == 0 || res[res.length - 1] != "B")) {
      res.push("B");
    } else {
      num++;
      res.push("R");
    }
  }

  //console.log(res)
  return num;
}


console.log(relaxDays([0, 1, 3, 2, 0, 2, 3, 3], 8));
