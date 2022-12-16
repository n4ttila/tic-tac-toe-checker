var lodash = require('lodash')

class TicTacToeChecker {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]
  }

  getWinner(v1, v2) {
    if (this.board[v1][v2] === 'x') {
      return 1
    } else if (this.board[v1][v2] === 'o') {
      return 2
    } else {
      return 0
    }
  }

  getEquals(a, b, c) {
    return a === b && b === c && a !== ''
  }

  getStatus() {
    if (this.getEquals(this.board[0][0], this.board[1][1], this.board[2][2])) {
      return this.getWinner(0, 0)
    } else if (this.getEquals(this.board[0][2], this.board[1][1], this.board[2][0])) {
      return this.getWinner(0, 2)
    } else {
      for (var i = 0; i < 3; i++) {
        if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) {
          return this.getWinner(i, 0)
        }

        if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) {
          return this.getWinner(0, i)
        }
      }
    }

    return -1
  }

  set(finishedBoard) {
    this.board = finishedBoard
  }
}

module.exports = TicTacToeChecker
