let str = 'catsanddog';
let dictionary = ['cat', 'cats', 'and', 'sand', 'dog'];

function wordBreak(str,dictionary){
    
    let minLength = dictionary[0].length;
    let maxLength = dictionary[0].length;
    str = str.split('');
    let ans = [];
    
    for(let i=1; i<dictionary.length; i++){
        if(dictionary[i].length < minLength){
            minLength = dictionary[i].length;
        }
        else if(dictionary[i].length > maxLength){
            maxLength = dictionary[i].length;
        }
    }
    
     wordBreak_2(str,dictionary,minLength,maxLength,ans,[]);
     return ans;
   
}

function wordBreak_2(str,dictionary,minLength,maxLength,ans,result){
    
    if(str.length==0){
        ans.push([...result]);
        return str;
    }
    
    for(let i = minLength; i<=maxLength; i++){
        let word = [];
        for(let j=0; j<i; j++){
            word.push(str[j]);
        }
        
        if(dictionary.includes(word.join(''))){
            str.splice(0,i);
            result.push(word.join(''));
            var value= wordBreak_2(str,dictionary,minLength,maxLength,ans,result);
            if(i<maxLength && value.length>0){
                result.pop();
            str = [...word,...value];
            }
            else{
                result.pop();
                return str = [...word,...value]
            }
        }
     }
    return str;
}

console.log(wordBreak(str,dictionary))















