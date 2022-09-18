// find Quotient
function findquotient(a,b){
    let c=0;
    for(i=1;a>c||a==c;i++){
      c+=b;
    }
    if(a>c){
       return i-1;
    }
    else{
      return i-2;
    }
   
  }
  findquotient(100,11)