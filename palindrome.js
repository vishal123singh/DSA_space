// Longest Palindromic Substring

var s="abcmadam";

function longestPalindrome(str){

  let n=str.length;
  let output="";
  for(let i=0;i<n-1;i++){
    let res=[str[i]];
    for(let j=i+1;j<n;j++){
      res.push(str[j]);
      let c1=[...res];
       c1.reverse();
      if(res.join("")==c1.join("")){
        if(output.length<res.length){
          output=c1.join("");
        }
      }
    }
  }
  return output;
}

longestPalindrome(s)