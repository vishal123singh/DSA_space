let maze = [ [1, 0, 0, 0], 
             [1, 1, 0, 1],
             [1, 1, 0, 0],
             [0, 1, 1, 1] ]

let N = 4;
let visited = new Array(N).fill(1).map(e=> new Array(N).fill(1))


function findPath(maze, visited, row, col, N, pathTaken){
    if(row == N-1 && col == N-1){
        console.log(pathTaken);
        return;
    }

    goDown(maze,visited,row,col,N,pathTaken);
    goleft(maze,visited,row,col,N,pathTaken);
    goRight(maze,visited,row,col,N,pathTaken);
    goUp(maze,visited,row,col,N,pathTaken);
    return;
}



function goDown(maze,visited,row,col,N,pathTaken){
      if(row+1 < N && maze[row+1][col] == 1 && visited[row+1][col] == 1){
        row++;
        visited[row][col] = 0;
        pathTaken.push('D');
        findPath(maze,visited,row,col,N,pathTaken);
        visited[row][col] = 1;
        pathTaken.pop();
        return;
      }
      else{
        return;
      }
}

function goleft(maze,visited,row,col,N,pathTaken){
    if(col-1 > 0 && maze[row][col-1] == 1 && visited[row][col-1] == 1){
        col--;
        visited[row][col] = 0;
        pathTaken.push('L');
        findPath(maze,visited,row,col,N,pathTaken);
        visited[row][col] = 1;
        pathTaken.pop();
        return;
    }
    else{
        return;
    }
}

function goRight(maze,visited,row,col,N,pathTaken){
    if(col+1 < N && maze[row][col+1] == 1 && visited[row][col+1] == 1){
        col++;
        visited[row][col] = 0;
        pathTaken.push('R');
        findPath(maze,visited,row,col,N,pathTaken);
        visited[row][col] = 1;
        pathTaken.pop();
        return;
    }
    else{
        return;
    }
}

function goUp(maze,visited,row,col,N,pathTaken){
    if(row-1 > 0 && maze[row-1][col] == 1 && visited[row-1][col] ==1){
        row--;
        visited[row][col] = 0;
        pathTaken.push('U');
        findPath(maze,visited,row,col,N,pathTaken);
        visited[row][col] = 1;
        pathTaken.pop();
        return;
    }
    else{
        return;
    }
}

findPath(maze, visited, 0, 0, 4, []);