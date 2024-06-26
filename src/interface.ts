interface TV {
  turnOn():boolean;
  turnoff():void;
}



const myTV:TV = {
  turnOn() {
    return true;
  },
  turnoff() {
    console.log('turn off');
  }
};

function tryTurnOn(tv:TV) {
  tv.turnOn();
}

tryTurnOn(myTV);

interface Cell {
  row: number;
  col: number;
  piece?: Piece;
}

interface SignUp {
  email: string;
  id: string;
  password: string;
}

function ajaxSignUp(data: SignUp) {
  // 서버로 회원가입 데이터를 보내는 함수
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({
        row,
        col,
      });
    }
  }

  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  }
};