var lodash = require("lodash");

class TicTacToeChecker {
    
    constructor() {
      this.board = [["", "", ""],["", "", ""],["", "", ""]];
    }

    getStatus() {
        return -999;

    }

    set(finishedBoard) {
        this.board = finishedBoard;
    }
}

module.exports = TicTacToeChecker