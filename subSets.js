
let arr = ['a','b','c','d','e'] 

function findSubSets(arr,index, result,arr1){

	arr1.push(result.join(''));
  
    if(index==arr.length){
		return;
	}
  
    result.push(arr[index]);
  
    let copy=[...result];
  
	findSubSets(arr,index+1,result,arr1);
  
    for(let i=1; i<=index; i++){
      copy.shift();
      arr1.push(copy.join(''))
    }
  
    return arr1.sort() ;
}

findSubSets(arr,0,[],[]);