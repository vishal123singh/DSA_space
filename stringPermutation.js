let str = 'ABCDE';

function stringPermutations(str,result,ans){
    
    if(result.length == str.length){
       ans.push(result.join(''));
       return;
    }
    
    for(let i=0; i<str.length; i++){
        
        if(!result.includes(str[i])){
            result.push(str[i]);
            stringPermutations(str,result,ans);
            result.pop();
        }
        
        if(i==str.length-1){
            return ans ;
        }
    }
}


console.log(stringPermutations(str,[],[]))