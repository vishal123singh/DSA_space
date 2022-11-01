let sudoko = [ [3, 0, 6, 5, 0, 8, 4, 0, 0],
               [5, 2, 0, 0, 0, 0, 0, 0, 0],
               [0, 8, 7, 0, 0, 0, 0, 3, 1],
               [0, 0, 3, 0, 1, 0, 0, 8, 0],
               [9, 0, 0, 8, 6, 3, 0, 0, 5],
               [0, 5, 0, 0, 9, 0, 6, 0, 0],
               [1, 3, 0, 0, 0, 0, 2, 5, 0],
               [0, 0, 0, 0, 0, 0, 0, 7, 4],
               [0, 0, 5, 2, 0, 6, 3, 0, 0] ];

// naive-approach
let len = sudoko.length;
let count=0;
function sudokoSolver(suduko,row,col,len){
    if(row == len-1 && col == len-1){
        count++;
        console.log(...sudoko);
        return;
    }
    let options=new Set();
    for(let i=0; i<len; i++){
        for(var j=0; j<len; j++){
            if(sudoko[i][j]==0){
               row=i;
               col=j;
               break;
            }
        }
        if(sudoko[i][j]==0){
            break;
        }
        
    }

    for(let k=0; k<len; k++){
        if(sudoko[row][k]!=0){
            options.add(sudoko[row][k])
        }
    }
    for(let p=0; p<len; p++){
        if(sudoko[p][col] != 0){
            options.add(sudoko[p][col]);
        }
    }
  for(let m=1; m<=len; m++){
    if(options.has(m)){
      options.delete(m);
    }else{
      options.add(m);
    }
    
  }
                
              
    if(options.size>=1){
        for(let value of options){
            sudoko[row][col] = value;
            sudokoSolver(sudoko,row,col,len);
        }
        sudoko[row][col] = 0;
    }else{
        return;
    }
    
            
    return;

};

sudokoSolver(sudoko,0,0,len);
console.log(count);