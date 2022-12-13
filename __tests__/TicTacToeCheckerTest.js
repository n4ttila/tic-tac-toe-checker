var TicTacToeChecker = require("../TicTacToeChecker");

describe("Check game status", () => {
    test("noWinner", () => {
      var checker = new TicTacToeChecker();
      var newBoard = [["x", "", "o"], ["", "o", ""], ["", "", "x"]];
    
      checker.set(newBoard);

      expect(checker.getStatus()).toEqual(-1);
    });
  });

  describe("Check game status", () => {
    test("xWins_column", () => {
      var checker = new TicTacToeChecker();
      var newBoard = [["x", "x", "o"], ["x", "o", "x"], ["x", "o", "x"]];
    
      checker.set(newBoard);

      expect(checker.getStatus()).toEqual(1);
    });
  });

  describe("Check game status", () => {
    test("xWins_row", () => {
      var checker = new TicTacToeChecker();
      var newBoard = [["x", "x", "x"], ["x", "o", "o"], ["o", "o", "x"]];
    
      checker.set(newBoard);

      expect(checker.getStatus()).toEqual(1);
    });
  });

  describe("Check game status", () => {
    test("xWins_diagonal", () => {
      var checker = new TicTacToeChecker();
      var newBoard = [["o", "o", "x"], ["o", "x", "o"], ["x", "x", "o"]];
    
      checker.set(newBoard);

      expect(checker.getStatus()).toEqual(1);
    });
  });

  describe("Check game status", () => {
    test("oWins_column", () => {
      var checker = new TicTacToeChecker();
      var newBoard = [["o", "x", "o"], ["o", "o", "x"], ["o", "o", "x"]];
    
      checker.set(newBoard);

      expect(checker.getStatus()).toEqual(2);
    });
  });

  describe("Check game status", () => {
    test("oWins_row", () => {
      var checker = new TicTacToeChecker();
      var newBoard = [["o", "o", "o"], ["o", "x", "x"], ["x", "x", "o"]];
    
      checker.set(newBoard);

      expect(checker.getStatus()).toEqual(2);
    });
  });

  describe("Check game status", () => {
    test("oWins_diagonal", () => {
      var checker = new TicTacToeChecker();
      var newBoard = [["o", "x", "x"], ["x", "o", "x"], ["o", "x", "o"]];
    
      checker.set(newBoard);

      expect(checker.getStatus()).toEqual(2);
    });
  });