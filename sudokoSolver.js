let sudoko = [ [3, 0, 6, 5, 0, 8, 4, 0, 0],
               [5, 2, 0, 0, 0, 0, 0, 0, 0],
               [0, 8, 7, 0, 0, 0, 0, 3, 1],
               [0, 0, 3, 0, 1, 0, 0, 8, 0],
               [9, 0, 0, 8, 6, 3, 0, 0, 5],
               [0, 5, 0, 0, 9, 0, 6, 0, 0],
               [1, 3, 0, 0, 0, 0, 2, 5, 0],
               [0, 0, 0, 0, 0, 0, 0, 7, 4],
               [0, 0, 5, 2, 0, 6, 3, 0, 0] ];

let len = sudoko.length;
let ans=[];

function sudokoSolver(sudoko,row,col,len){
    
    if(row == len-1 && col == len-1){
        let flag=true;
        for(let w=0; w<=len-3; w=w+3){
            for(let c=0; c<=len-3; c=c+3){
                let mySet=new Set();
                for(let i=w; i<w+3; i++){
                    for(let j=c; j<c+3; j++){
                        mySet.add(sudoko[i][j]);
                    }
                }
                if(mySet.size != 9){
                    break;
                }
            }
            if(mySet.size != 9){
                flag=false;
                break;
            }
           
        }
    
        if(flag){
          let x =[];
          for(let r=0; r<len; r++){
            x.push([...sudoko[r]])
          }
            ans.push(x);
        }
       
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
        }
        else{
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
    
            
    return ans;

};

console.log(sudokoSolver(sudoko,0,0,len));


   
         



