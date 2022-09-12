/*
Given an array Arr[] of N integers. 
Find the contiguous sub-array(containing at least one number) 
which has the maximum sum and return its sum.
*/
// Time complexity : O(n)
// Space complexity : O(1)
let arr = [1,2,3,-2,5];

const maxSubarraySum = arr => { 

    let sum = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(arr[i]<0){
            count++;
        }
    }

    if(count == arr.length){
        let min = arr[0]
        for(let i = 1; i < arr.length; i++){
            if(arr[i]>min){
                min = arr[i];
            }
        }

        return min;
    }
    
    let i = 0 , j = arr.length-1;

    while(arr[i]<0 || arr[j]<0){
        
        if(i<j){

            if(arr[i]<0){
                sum = sum - arr[i];
                i++;
            }
            
            if(arr[j]<0){
                sum = sum - arr[j];
                j--;
            }

        }
       
    }

    return sum;

}

console.log(maxSubarraySum(arr));