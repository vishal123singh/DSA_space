// time complexity: O(n);
// Auxillary space: O(n);

let numbers = [5, 2, 4, 0, 2, 5, 3]; // 5,2   5,2  2,5  4,3 => count is 4
let K = 7;

function getPairsCount(arr,k){
    let obj = {};
    
    for(let i=0; i<arr.length; i++){
        
        if(obj[k-arr[i]] === undefined){
             obj[k-arr[i]]=0;
        }
       
        if(obj[arr[i]] !== undefined){
           obj[arr[i]] += 1
        }
    }
    
    let countOfPairs = 0;
    for(let key in obj){
        countOfPairs += obj[key]
    }
    
    return countOfPairs;
}

console.log(getPairsCount(numbers,K))