// Longest common subsequence
// time complexity : O(n)
// auxillary space : O(n)

let array = [1,9,3,10,4,20,2];

function LCS(arr){
   let obj = {};
    for(let i=0; i<arr.length; i++){
        obj[arr[i]]='';
    }
    
   arr=[];
   for(let key in obj){
       arr.push(parseInt(key))
   }
   
    let count = 1;
    let count2 = 1;
    for(let i=1; i<arr.length; i++){
       
        if(arr[i]-arr[i-1]==1){
            count2++;
        }
        else if(count2>count){
            count = count2;
            count2 = 0;
        }
    }
    return count;
}
LCS(array)

