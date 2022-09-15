
let arr = ['a','b','c','d','e'] 

function findSubSets(arr,index, result,arr1){

    arr1.push([...result]);
  
    if(index==arr.length){
       return;
     }
  
    result.push(arr[index]);
  
    let copy=[...result];
  
    findSubSets(arr,index+1,result,arr1);
  
    for(let i=1; i<=index; i++){
      copy.shift();
      arr1.push([...copy]) ;
    }
  
    return arr1;
}

console.log(findSubSets(arr,0,[],[]).sort());
