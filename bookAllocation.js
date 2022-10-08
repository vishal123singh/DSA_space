// time Complexity: O(log of max number of pages a student can have) * number of books

let books = [12, 34, 67, 90]; 
let s = 2;                       
let min = books[0];
let max = 0;
for(let i=s-1; i<books.length; i++){
  max += books[i];
}

function bookAllocation(s, min, max, books, minMax){
  if(s>books.length){
    return 'Answer does not exist for given arguments';
  }
 
  if(min>max){
    return minMax;
  }
  
  let mid = Math.floor((min+max)/2);
  
  let values = allocateBooks(books, s, mid);
  if(values[0]==0 && values[1]<books.length-1){
    return bookAllocation(s, mid+1, max, books, minMax);
  }
  else if(values[0]>0 && values[1]==books.length-1){
    return bookAllocation(s, min, mid-1, books, minMax);
  }
  else if(values[0]==0 && values[1]==books.length-1){
    if(values[2]<minMax){
      minMax=values[2];
    }
    return bookAllocation(s, min, mid-1, books, minMax)
  }
}

bookAllocation(s, min, max, books, max);
  
  
function allocateBooks(books, s, mid){
  let index=-1;
  let sum = 0;
  let max = 0;
  
  while(s>0 && index<books.length-1){
    if((sum + books[index+1]) <= mid){
       sum += books[index+1];
       index++;
       if(index==books.length-1){
         s--;
       }
    }
    else{
      s--;
      sum=0;
    }
    if(sum>max){
      max=sum;
    }
  }
  
  return [s,index,max];
}