// time complexity = O(Math.max(logn,places)); here "places" refers to 'upto how many places after decimal' you want to find the squareroot of the number(only for those numbers which are not perfect squares.eg: 24, 33, etc.)
// space complexity: O(1)
// time complexity for numbers which are perfect squares is O(logn). eg:25, 36, 49, etc.
let number = 25;

function squareRoot(number,low,high,places){
    if(low>high){
        let d=1;
        let num=high+1;
        for(let i=1; i<=places; i++){
            d=d*10;
            num = squareRoot_2(number,num,0,9,d);
        }
        return num; 
    }
    
    let mid = parseInt((low+high)/2);
    
    if((mid+1)*(mid+1)==number){
        return mid+1;
    }
    else if((mid+1)*(mid+1)>number){
        return squareRoot(number,low,mid-1,places);
    }
    else{
        return squareRoot(number,mid+1,high,places);
    }
}

squareRoot(number,0,number-1,3)

function squareRoot_2(number,num,low,high,d){
    if(low>high){
        return num + high/d;
    }
    
    let mid=parseInt((low+high)/2);
    
    let n = num + mid/d;
    
    if(n*n>number){
        return squareRoot_2(number,num,low,mid-1,d)
    }
    else if(n*n==number){
        return num + mid/d;
    }
    else{
        return squareRoot_2(number,num,mid+1,high,d);
    }
}





