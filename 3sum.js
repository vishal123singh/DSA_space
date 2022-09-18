//3 Sum

var array=[-1,0,1,2,-1,-4];

function threeSum(arr){
  let ans=[];
  let check=[];
  for(let i=0;i<arr.length-2;i++){
    for(let j=i+1;j<arr.length;j++){
      for(let k=j+1;k<arr.length;k++){
        if(arr[i]+arr[j]+arr[k]==0){
          if(check.indexOf(arr[i])==-1||check.indexOf(arr[j])==-1||check.indexOf(arr[k])==-1){
              ans.push([arr[i],arr[j],arr[k]]);
              check.push(arr[i],arr[j],arr[k]);
          }}}}}
  return ans;
}

threeSum(array);  
