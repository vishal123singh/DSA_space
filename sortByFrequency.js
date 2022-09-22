let arr = [2,5,8,8,5,6,2,8]; // n=length of array; m = no.of distinct elements;
// time complexity:O(n)
// auxillary space: O(m+n)
function sortByFrequency(arr){
    let obj = {};
    for(let i=0; i<arr.length; i++){  // O(n)
        if(!(arr[i] in obj)){
            obj[arr[i]]=[arr[i]];
        }
        else{
            obj[arr[i]].push(arr[i])
        }
    }
   
    arr = [];
    for(let key in obj){   // O(m)
       arr.push(obj[key]); 
    }
   arr.sort((a,b)=>{         // O(mlogm)
       if(a.length>b.length){
           return 1;
       }
       else if(a.length<b.length){
           return -1;
       }
       else{
           if(a[0]>b[0]){
               return -1;
           }else{
               return 1;
           }
       }
   });
    let arr2=[];
    arr.forEach(e=>arr2.push(...e)); // o(n)
    return arr2;
}

sortByFrequency(arr);