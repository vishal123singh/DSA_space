// time complexity: O(n^2*logn)
// space complexity: O(1)

let sticks = [4, 9, 3, 7, 2, 5, 8];
// triangle violating property: 1st side + 2nd side < third side

function gameOfTriangle(arr){
    arr.sort();
    let count_1 = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            let count_2 = 0;
            let target = arr[i]+arr[j];
            count_2 = binarySearch(arr,j+1,arr.length-1,target,count_2);
            if(count_2==0){
                break;
            }
            else{
                count_1 += count_2;
            }
        }
    }
    return count_1;
}

gameOfTriangle(sticks);

function binarySearch(arr,low,high,target,count_2){
        if(low>high){
            return count_2;
        }
    
        let mid = parseInt((low+high)/2);
    
        if(arr[mid]>target){
            count_2++;
            return binarySearch(arr,mid+1,high,target,count_2);
        }
    
        else if (arr[mid]<=target){
            return binarySearch(arr,mid+1,high,target,count_2);
        }
    
    }