
// time Complexity: O(Math.max(A.length,B.length,C.length));
// Auxillary Space: O(Math.min(A.length,B.length,C.length));

let A = [1, 5, 10, 20, 40, 80];
let B = [6, 7, 20, 80, 100];
let C = [3, 4, 15, 20, 30, 70, 80, 120];

function commomElements(A,B,C){
  
  let i = 0, j = 0;
  let commons = [];
  while(i<A.length && j<B.length){
    if(A[i]==B[j]){
      commons.push(A[i]);
      i++;j++;
    }
    else if(A[i]>B[j]){
      j++;
    }
    else if(A[i]<B[j]){
      i++;
    }
 }
  
  let k=0, m=0;
  A=[];
  while(m<commons.length){
    if(C[k]==commons[m]){
      A.push(C[k]);
      k++;m++;
    }
    else if(C[k]<commons[m]){
      k++;
    }
    else{
      m++;
    }
  }
  
  return A;
}

commomElements(A,B,C);