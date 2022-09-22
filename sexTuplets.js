// time complexity: O(n^3logn)
// auxillary space: O(n^3)
let range=[5,7,10];

function sexTuplets(range,result,arr1,arr2){
    if(result.length==3){
        arr1.push((result[0] * result[1]) + result[2]);
        arr2.push(result[0] * (result[1] + result[2]));
        return;
    }
    for(let i=0; i<range.length; i++){
        result.push(range[i]);
        sexTuplets(range,result,arr1,arr2);
        result.pop();
    }
    
    return [arr1,arr2];
}

function countOfSexTuplets(range){
    let result=[];
    let arr1=[];
    let arr2=[];
    let count=0;
    let lowerBound=0;
    let upperBound=0;
    let arrays = sexTuplets(range,result,arr1,arr2);
    arrays[1].sort((a,b)=>a-b);
    for(let i=0; i<arr1.length; i++){
        lowerBound = getLowerBound(arr2,arr1[i],0,arr2.length-1,lowerBound);
        upperBound = getUpperBound(arr2,arr1[i],0,arr2.length-1,upperBound);
        count += upperBound-lowerBound;
    }
   
    return count;
    
}

function getLowerBound(arr,target,low,high,lb){
    if(low>high){
        return 0;
    }
    
    let mid=parseInt((low+high)/2);
    
    if(arr[mid]===target){
        lb=mid;
        if(arr[mid-1]==target){
            return getLowerBound(arr,target,low,mid-1,lb);
        }
        else{
            return lb;
        }
    }
    else if(arr[mid]>target){
         return getLowerBound(arr,target,low,mid-1,lb);
    }
    else{
         return getLowerBound(arr,target,mid+1,high,lb);
    }
}

function getUpperBound(arr,target,low,high,ub){
    if(low>high){
        return 0;
    }
    
    let mid=parseInt((low+high)/2);
    
    if(arr[mid]===target){
        ub=mid+1;
        if(arr[mid+1]==target){
            return getUpperBound(arr,target,mid+1,high,ub);
        }
        else{
            return ub;
        }
    }
    else if(arr[mid]>target){
         return getUpperBound(arr,target,low,mid-1,ub);
    }
    else{
         return getUpperBound(arr,target,mid+1,high,ub);
    }
}

countOfSexTuplets(range);
