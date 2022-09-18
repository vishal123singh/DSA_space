//find substring

var s="barfoofoobarthefoobarman";
var words= ["bar","foo","the"];

function findSubstring(str,arr){
  len1=arr[0].length;
  len2=(str.length-(len1*arr.length))+len1;
  len3=len1*arr.length;
  indices=[];
  str=str.split('');
  arr=arr.join('');
  arr=arr.split('');
  arr.sort();
  
  for(i=0;i<len2;i+=len1){
  str2=str.slice(i,i+len3);
    str2.sort();
    if(str2.join('')==arr.join('')){
      indices.push(i);
    }
  }
  return indices;
}

findSubstring(s,words);
