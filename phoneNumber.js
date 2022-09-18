//letter combinations of a phone's number keypad

function passTheKey(str){
    let myObj={2:"abc",3:"def",4:"ghi",5:"jkl",6:"mno",7:"pqrs",8:"tuv",9:"wxyz"};
    let arr=[];
    for(let j=0;j<str.length;j++){
      arr.push(myObj[str[j]]);
    }
   return letterCombinations(arr,0);
  }
  function letterCombinations(arr,i){
    //Base case
    if(i==arr.length-1){
      let splity=arr[i].split("");
      return splity;
    }
    
    let x=letterCombinations(arr,i+1);
    let output=[...x];
    x=[];
    for(let k=0;k<arr[i].length;k++){
      for(let m=0;m<output.length;m++){
        x.push(arr[i][k]+output[m]);
      }
    }
    return x;
  }
  passTheKey("249");