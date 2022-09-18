// Valid Parenthesis
// [],{},()
var str="()()()";

function validParenthesis(str){
  
  let myArr=["[]","{}","()"];
  let count=0;
  for(let i=0;i<str.length;i+=2){
    for(let j=0;j<myArr.length;j++){
      if((str[i]+str[i+1])==myArr[j]){
        count++;
        break;
      }
    }
    if(count==0){
      break;
    }
  }
  if(count==(str.length/2)){
    return "valid";
  }
  else{
    return "not valid";
  }
}
validParenthesis(str);
