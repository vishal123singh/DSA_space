// if u just want to get maximum profit  by buying and selling

let prices = [100, 180, 40, 695, 210, 535, 360] 

function maxProfit(arr){     // time complexity: O(n)
    let min=0;               // space complexity: O(1)
    let profit=0;
    
    for(let i=1; i<arr.length; i++){
       if(arr[i]>arr[min]){
          profit += arr[i]-arr[min];
          min=i;
       }
      else if(arr[i]<arr[min]){
          min=i
       }
    }
 
    console.log('Profit :' + profit);
    return profit;
 }
 
 console.log(maxProfit(prices)) 

// Above program with slight changes if u want to find the days also 
// on which u r selling and buying to get maximum profit

function stockBuySell(arr){
   let min=0;                              // time complexity: O(n)
   let profit=0;                           // Auxillary space : O(n)
   let days = [new Set()];let k=0;

   for(let i=1; i<arr.length; i++){
      if(arr[i]>arr[min]){
         profit += arr[i]-arr[min];
         days[k].add(min)
         days[k].add(i);
         min=i;
      }
     else if(arr[i]<arr[min]){
         min=i;
         days.push(new Set())
         k++;
      }
   }
  let temp=[]
  for(let i=0; i<days.length; i++){
      temp = [...days[i]];
      days[i] = [temp[0],temp[temp.length-1]]
     
  }
   if(days[days.length-1][0]==undefined){days.pop()};
   console.log('Profit :' + profit);
   return days;
}

console.log(stockBuySell(prices)) ;

//days[i]=[Math.min(...days[i]),Math.max(...days[i])]
// [1,2,3,4,5]
// [3,3,5,0,0,3,1,4]
// [7,1,5,3,6,4]
// [4,2,2,2,4]
//  [100, 180, 260,310,40,535,695];






