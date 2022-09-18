// Longest Substring without repeating characters:

var str="abcabcdbb";

function longestSubString(str){

 let arr=[str[0]]; 
 let max=1,c1;
  for(let i=1;i<str.length;i++){
    for(let j=0;j<arr.length;j++){
      if(str[i]==arr[j]){
        c1=str[i];
        if(arr.length>max){
          max=arr.length;
        }
        console.log(...arr);
        arr=[str[i]];
        break;
      }
    }
    if(c1!=str[i]){
      arr.push(str[i]);
    }
  }
  if(max>arr.length){
    return max;
  }
  else{
    return arr.length;
  }
}

longestSubString(str);