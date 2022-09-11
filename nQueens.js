
let N=4;
let board = new Array(N).fill(1).map(e => new Array(N).fill(1))
let configuration = new Array();

function nQueens(N,board,col,configuration){

    if(configuration.length==N){
        console.log(...configuration);
        return;
    }

    for(let i=0; i<N; i++){
        if(isSafe(i,col,N,board)){
            configuration.push([i,col]);
            board[i][col]=0;
            nQueens(N,board,col+1,configuration);
            board[i][col]=1;
            configuration.pop();
        }
    }
   
}

function isSafe(row,col,N,board){
    
       // west
    for(let i=col; i>=0; i--){
        if(board[row][i]==0){
            return false;
        }
    }
    
    // northwest
    let i=row, j=col;
    while(i>=0){
        if(board[i][j]==0){
            return false;
        }
        i--;
        j--;
    }
    
    // southWest
    let p=row, q=col;
    while(p<N){
        if(board[p][q]==0){
            return false;
        }
        p++;
        q--;
    }

    return true;

}

nQueens(N,board,0,configuration);

