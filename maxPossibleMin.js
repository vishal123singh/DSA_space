let positions = [1, 2, 4, 8, 9];
let cows = 3;
let lowerRange = positions[1]-positions[0];
let upperRange = positions[positions.length-1]-positions[cows-2];

function aggressiveCows(positions,cows,low,high,distance){
  
  if(low>high){
    return distance;
  }
  
  let places = [0];
  let count = 0;
  let maxMinimum = parseInt((low+high)/2);
  
  for(let i=1; i<positions.length; i++){
    
    if(check(positions,places,i,maxMinimum)){
      places.push(i)
      count++;
      
    }
    
    if(i == positions.length-1){
      return aggressiveCows(positions,cows,low,maxMinimum-1,distance)
    }
    
    if(count == cows-1){
      if(maxMinimum > distance){
        distance = maxMinimum;
      }
      return aggressiveCows(positions,cows,maxMinimum+1,high,distance);
    }
  }
}

function check(positions,places,i,maxMinimum){
  
  if(positions[i]-positions[places[places.length-1]]>=maxMinimum){
    return true;
  }
  else{
    return false;
  }
}

console.log(aggressiveCows(positions,cows,lowerRange,upperRange,0));