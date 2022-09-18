// find needle in haystake
var haystake="elephant", needle="an";

function findNeedle(str,target){
  for(i=0;i<str.length;i++){
    let s=str.slice(i,i+target.length);
    if(s==target){
      return i;
    }
  }
  if(i==str.length){
    return -1;
  }
}
findNeedle(haystake,needle);