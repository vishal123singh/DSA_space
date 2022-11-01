let N = 4;
let board = new Array(N).fill(1).map((e) => new Array(N).fill("."));
let answer = [];

function nQueens(N, board, col, count) {
  if (count == N) {
    console.log(...board);
    let temp = [];
    for (let i = 0; i < N; i++) {
      let str = "";
      for (let j = 0; j < N; j++) {
        str += board[i][j];
      }
      temp.push(str);
    }
    answer.push(temp);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (isSafe(i, col, N, board)) {
      count++;
      board[i][col] = "Q";
      nQueens(N, board, col + 1, count);
      board[i][col] = ".";
      count--;
    }
  }
}

function isSafe(row, col, N, board) {
  // west
  for (let i = col; i >= 0; i--) {
    if (board[row][i] == "Q") {
      return false;
    }
  }

  // northwest
  let i = row,
    j = col;
  while (i >= 0) {
    if (board[i][j] == "Q") {
      return false;
    }
    i--;
    j--;
  }

  // southWest
  let p = row,
    q = col;
  while (p < N) {
    if (board[p][q] == "Q") {
      return false;
    }
    p++;
    q--;
  }

  return true;
}

nQueens(N, board, 0, 0);
//console.log(answer);
