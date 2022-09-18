//longest common prefix

let strs=["flower","flow","flight"];

function longestCommonPrefix(strArr){
  
 let prefix="";let count=0;
  for(let j=0;j<=count;j++){
    for(let i=0;i<strArr.length-1;i++){
      if(strArr[i][j]==strArr[i+1][j]){
        if(i==strArr.length-2){
         prefix+=strArr[i][j];
         count++;
        }
      }
      else{
        break;
      }
    }
  }
  return prefix;
}
longestCommonPrefix(strs);