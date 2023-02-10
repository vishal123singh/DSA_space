// 0 1 1 2 3 5 8 13 21...
let nTerms = [];
function fibbonacci(nth_term) {
  if (nth_term < 3) {
    return nth_term - 1;
  }
  let _1st_term = 0;
  let _2nd_term = 1;
  nTerms.push(_1st_term, _2nd_term);

  for (let i = 1; i < nth_term - 1; i++) {
    var _3rd_term = _1st_term + _2nd_term;
    nTerms.push(_3rd_term);
    _1st_term = _2nd_term;
    _2nd_term = _3rd_term;
  }
  console.log(nTerms);
  return _3rd_term;
}

console.log(fibbonacci(5));

//function f()
