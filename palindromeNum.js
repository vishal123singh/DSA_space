//Palindrome number;

let x=121;
function palindrome(num,value,num1){
  if(num>0){
    value +=num%10;
   return palindrome(parseInt(num/10),value,x);
   
  }
  else{
    if(num1==value){
      return true;
    }
    else{
      return false;
    }
  }
}
palindrome(x,"",x);