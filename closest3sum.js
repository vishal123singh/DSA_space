//Closest 3 sum

var nums=[-1,2,1,-4];
var target=1;

function _3sumClosest(arr,target){
  let sum=arr[0]+arr[1]+arr[2];
  let diff;
  target>sum?diff=target-sum:diff=sum-target;
  let value=diff;         
  let output=sum
  for(let i=0;i<arr.length-2;i++){
    for(let j=i+1;j<arr.length-1;j++){
      for(let k=j+1;k<arr.length;k++){
  sum=arr[i]+arr[j]+arr[k];
  target>sum?diff=target-sum:diff=sum-target;
        if(diff<value){
          value=diff;
          output=sum;
        }
      }
    }
  }
  return output;
}
_3sumClosest(nums,1);