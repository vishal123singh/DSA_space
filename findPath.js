


let maze = [ [1, 0, 0, 0],
[1, 1, 0, 1],
[1, 1, 0, 0],
[0, 1, 1, 1] ]



function findPath(maze, n=maze.length, x=0, y=0, visted=new Array(n).fill(1).map(e=>new Array(n).fill(1)) ,path=[]){
if(maze[x][y] == 0 || maze[n-1][n-1] == 0){
return 'No path exists';
}

if(x == n-1 && y == n-1){
console.log(path);
return;
}

canGoDown(maze,visted,x,y,n,path);
canGoLeft(maze,visted,x,y,n,path);
canGoRight(maze,visted,x,y,n,path);
canGoUp(maze,visted,x,y,n,path);
return;
}

function canGoDown(maze,visted,x,y,n,path){
if(x+1 < n){
if(maze[x+1][y] == 1 && visted[x+1][y] == 1){
path.push('D');
visted[x+1][y] = 0;
x=x+1;
findPath(maze,n,x,y,visted,path);
path.pop();
visted[x][y] = 1;
return;
}
}else{
return;
}
}

function canGoLeft(maze,visted,x,y,n,path){
if(y-1 >= 0){
if(maze[x][y-1] == 1 && visted[x][y-1] == 1 && x!=0 && y-1!=0){
path.push('R');
visted[x][y-1] = 0;
y=y-1;
findPath(maze,n,x,y,visted,path);
path.pop();
visted[x][y] = 1;
return;
}
}else{
return;
}
}

function canGoRight(maze,visted,x,y,n,path){
if(y+1 < n){
if(maze[x][y+1] == 1 && visted[x][y+1] == 1){
path.push('R');
visted[x][y+1] = 0;
y=y+1;
findPath(maze,n,x,y,visted,path);
path.pop();
visted[x][y] = 1;
return;
}
}else{
return;
}
}


function canGoUp(maze,visted,x,y,n,path){
if( x-1 >= 0){
if(maze[x-1][y] == 1 && visted[x-1][y] == 1 && x-1!=0 && y!=0){
path.push('U');
visted[x-1][y] = 0;
x=x-1;
findPath(maze,n,x,y,visted,path);
path.pop();
visted[x][y] = 1;
return;
}
}else{
return;
}
}


findPath(maze);