// Two Sum

var arr=[2,7,11,15];

function twoSum(arr,target){
  
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(target-arr[i]===arr[j]){
      return [i,j];
      }
    }
  }
}

twoSum(arr,13);