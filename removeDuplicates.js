// Remove duplicates from a sorted array
// time complexity: O(n)
// space complexity: O(1)


let arr = [2, 2, 2, 3, 4, 5, 6, 6, 7];

function removeDuplicates(arr){
    
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] == arr[i+1]){
            arr[i] = null;
        }
    }

   let j = 0;
    
   while(arr[j] != null){
    j++;
   }
   
   let i = j;
   let k = j
   
   while(j < arr.length){
       
    if(arr[k+1] != null && k+1 < arr.length){
        [arr[j],arr[k+1]] = [arr[k+1],arr[j]];
        j++;
        k++;
    }
    else if (arr[k+1] == null && k+2 < arr.length){
      if(arr[k+2] != null){
        [arr[j],arr[k+2]] = [arr[k+2],arr[j]];
        j++;
        k++;
      }
      else{
        k++;
      }
        
    }
     else{
       arr.pop()
     }
       
   }
  
  return arr;
}

console.log(removeDuplicates(arr))