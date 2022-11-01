let board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

function findEmptyPlace(board) {
  let emptyPlaces = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] == 0) {
        emptyPlaces.push([row, col]);
      }
    }
  }

  let markers;
  markers = findMarkers(board, 0, 0, []);
  return solveSudoko(board, markers, emptyPlaces);
}
findEmptyPlace(board);

function solveSudoko(board, markers, emptyPlaces) {
  if (emptyPlaces.length == 0) {
    console.log(...board);
    return;
  }

  let row = emptyPlaces[0][0];
  let col = emptyPlaces[0][1];

  let numbers = find_nums_i_can_use(board, row, col);
  if (numbers.size == 0) {
    return;
  }
  numbers.forEach((num) => {
    board[row][col] = num;
    if (check_board(board, markers, row, col)) {
      let x = emptyPlaces.shift();
      solveSudoko(board, markers, emptyPlaces);
      emptyPlaces.unshift(x);
      board[row][col] = 0;
    } else {
      board[row][col] = 0;
      return;
    }
  });
  return;
}

function findMarkers(board, r, c, markers) {
  let i, j;
  let pl = [];
  for (i = r; i < 3 + r; i++) {
    for (j = c; j < 3 + c; j++) {
      if (board[i][j] == 0) {
        pl.push([i, j]);
      }
    }
  }

  markers.push(pl.pop());

  if (i == 3 && j == 3) {
    findMarkers(board, 0, j, markers);
  } else if (i == 3 && j == 6) {
    findMarkers(board, 0, j, markers);
  } else if (i == 3 && j == 9) {
    findMarkers(board, i, 0, markers);
  } else if (i == 6 && j == 3) {
    findMarkers(board, 3, j, markers);
  } else if (i == 6 && j == 6) {
    findMarkers(board, 3, j, markers);
  } else if (i == 6 && j == 9) {
    findMarkers(board, i, 0, markers);
  } else if (i == 9 && j == 3) {
    findMarkers(board, 6, j, markers);
  } else if (i == 9 && j == 6) {
    findMarkers(board, 6, j, markers);
  }

  return markers;
}

function find_nums_i_can_use(board, row, col) {
  let set = new Set();
  // check north
  if (row != 0) {
    for (let r = row - 1; r >= 0; r--) {
      if (board[r][col] != 0) {
        set.add(board[r][col]);
      }
    }
  }

  // check south
  if (row != board.length - 1) {
    for (let r = row + 1; r < board.length; r++) {
      if (board[r][col] != 0) {
        set.add(board[r][col]);
      }
    }
  }

  // check east
  if (col != board.length - 1) {
    for (let c = col + 1; c < board.length; c++) {
      if (board[row][c] != 0) {
        set.add(board[row][c]);
      }
    }
  }

  // check west
  if (col != 0) {
    for (let c = col - 1; c >= 0; c--) {
      if (board[row][c] != 0) {
        set.add(board[row][c]);
      }
    }
  }

  for (let i = 1; i <= board.length; i++) {
    if (set.has(i)) {
      set.delete(i);
    } else {
      set.add(i);
    }
  }

  return set;
}

function check_board(board, markers, row, col) {
  let flag = false;
  for (let i = 0; i < markers.length; i++) {
    if (row == markers[i][0] && col == markers[i][1]) {
      flag = true;
      break;
    }
  }
  if (flag) {
    let myset = new Set();

    if (row == 2 && col >= 0 && col <= 2) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j]) {
            myset.add(board[i][j]);
          }
        }
      }
    } else if (row == 2 && col >= 3 && col <= 5) {
      for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++) {
          if (board[i][j]) {
            myset.add(board[i][j]);
          }
        }
      }
    } else if (row == 2 && col >= 6 && col <= 8) {
      for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++) {
          if (board[i][j]) {
            myset.add(board[i][j]);
          }
        }
      }
    } else if (row == 5 && col >= 0 && col <= 2) {
      for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j]) {
            myset.add(board[i][j]);
          }
        }
      }
    } else if (row == 5 && col >= 3 && col <= 5) {
      for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 6; j++) {
          if (board[i][j]) {
            myset.add(board[i][j]);
          }
        }
      }
    } else if (row == 5 && col >= 6 && col <= 8) {
      for (let i = 3; i < 6; i++) {
        for (let j = 6; j < 9; j++) {
          if (board[i][j]) {
            myset.add(board[i][j]);
          }
        }
      }
    } else if (row == 8 && col >= 0 && col <= 2) {
      for (let i = 6; i < 9; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j]) {
            myset.add(board[i][j]);
          }
        }
      }
    } else if (row == 8 && col >= 3 && col <= 5) {
      for (let i = 6; i < 9; i++) {
        for (let j = 3; j < 6; j++) {
          if (board[i][j]) {
            myset.add(board[i][j]);
          }
        }
      }
    } else if (row == 8 && col >= 6 && col <= 8) {
      for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++) {
          if (board[i][j]) {
            myset.add(board[i][j]);
          }
        }
      }
    }

    if (myset.size < 9) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}
