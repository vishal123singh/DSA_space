// Qno.410(leetcode) => Split Array Largest Sum

// this is intuitive approach
let arr = [5,1,4,9,2];
let k=3;

function minMaxSumSubarray(arr,k){
    let ans=[];
    let choices=[];
    
    for(let i=1; i<=arr.length-k+1; i++){
         choices.push(i);
    }
    
    splitTheArray(arr,k,0,[],choices,ans);
    
    let minMaxSum=[];
    
    for(let i=0; i<ans.length; i++){
        let maxSum=0;
        let c=0;
        for(let j=0; j<k; j++){
            let Sum =0;
            for(var p=c; p<(c+ans[i][j]); p++){
                Sum += arr[p];
                if(Sum>maxSum){
                   maxSum =Sum; 
                }
            }
            c=p;
        }
        minMaxSum.push(maxSum);
    }
    
    return Math.min(...minMaxSum);
}

console.log(minMaxSumSubarray(arr,k));

function splitTheArray(arr,k,sum,result,choices,ans){
    if(sum==arr.length && result.length==k){
        ans.push([...result]);
        return;
    }
    if(sum<arr.length){
        for(let i=0; i<choices.length; i++){
             result.push(choices[i]);
             sum+=choices[i];
             splitTheArray(arr,k,sum,result,choices,ans);
             sum -= result.pop();
        }
    }
    return;
 }
