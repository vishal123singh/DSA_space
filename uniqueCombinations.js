 
 
     let arr = [1, 2, 3, 6, 4, 7, 3, 0, 2];
     let target = 8;
 
     function combinationSum(arr,target,result=[],index=0,sum=0,ans=[],store=[]){
 
         if(sum == target){
           let copy = [...result];
           if(store.indexOf(copy.sort((a,b)=>a-b).join('')) == -1){
              ans.push([...result]);
              store.push(copy.join(''));
            }
         }
 
         if(index < arr.length && sum < target){
            result.push(arr[index]);
            sum += arr[index];
            combinationSum(arr,target,result,index+1,sum,ans,store);
            let element = result.pop();
            sum -= element;
            if(index < arr.length-1 && sum < target){
            combinationSum(arr,target,result,index+1,sum,ans,store);
            }
         }
 
 
         return ans;
 
     }
 
     console.log(combinationSum(arr,target));
 
 
 

