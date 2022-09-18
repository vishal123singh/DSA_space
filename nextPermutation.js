let numbers = [4, 7, 3, 2, 1]; 
// try these cases: [1,2,3,6,5,4], [4,3,2,1], [4,7,3,2,1],[4,7,7,3,2,1]
// time complexity: O(n)
// space complexity: O(1)
function nextPermutation(arr){

    let count=1;
    let i=arr.length-1;
    
    while(i>0){
        if(arr[i]<arr[i-1]){ 
            i--;
        }
        else if(arr[i]>arr[i-1]){
            break;
        }
        else if(arr[i]==arr[i-1]){
            count++;i--;
        }
    }
  
    if(i==0){
        let k=0;
        let j=arr.length-1;
        
        while(k<j){
            [arr[k],arr[j]]=[arr[j],arr[k]];
            k++;
            j--;
        }
        return arr;
    }
    else{
        let index=i;
        for(let q=i+1; q<arr.length; q++){
            if(arr[q]>arr[i-1] && arr[q]<arr[i]){
                index=q;
            }
        }
        
        [arr[index],arr[i-1]] = [arr[i-1],arr[index]];
        
        
        let k=i;
        let j=arr.length-1;
        
        while(k<j){
            [arr[k],arr[j]]=[arr[j],arr[k]];
            k++;
            j--;
        }
        [arr[arr.length-count],arr[arr.length-1]]=[arr[arr.length-1],arr[arr.length-count]]
        return arr;
    }
    
}

nextPermutation(numbers);