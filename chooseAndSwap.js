
function chooseAndSwap(str) {
  let swapChar1, swapChar2, char1Index, char2Index;
  let str2 = "",
    strCopy = "",
    map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], i);
    }
  }

  for (let [key,value] of map) {
    strCopy += key;
  }

  for (let i = 0; i < strCopy.length; i++) {
    if (strCopy[i + 1] < strCopy[i]) {
      if(swapChar1 && strCopy[i+1]<swapChar1){
        swapChar1 = strCopy[i + 1];
      }
      else if(!swapChar1){
         swapChar1 = strCopy[i + 1];
      }
    }
  }

  for (let i = 0; i < strCopy.length; i++) {
    if (strCopy[i] > swapChar1) {
      swapChar2 = strCopy[i];
      char2Index = map.get(swapChar2);
      break;
    }
  }
  char1Index = map.get(swapChar1);
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == swapChar2 && char2Index < char1Index) {
      str2 += swapChar1;
    } else if (str[i] == swapChar1 && char2Index < char1Index) {
      str2 += swapChar2;
    } else {
      str2 += str[i];
    }
  }

  return str2;
}

chooseAndSwap("abaebbbfsefbfgdcwgwragrgraweawqaaqwqdefvyqefaa");

