var myTV = {
    turnOn: function () {
        return true;
    },
    turnoff: function () {
        console.log('turn off');
    }
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTV);
function ajaxSignUp(data) {
}
function createBoard() {
    var cells = [];
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 3; col++) {
            cells.push({
                row: row,
                col: col,
            });
        }
    }
    return cells;
}
var board = createBoard();
board[0].piece = {
    move: function (from, to) {
        return true;
    }
};
//# sourceMappingURL=interface.js.map