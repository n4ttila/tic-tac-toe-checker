# Tic tao toe checker
Demo solution can be found on the “demo_solution” branch.

### Source: [https://www.codewars.com/kata/tic-tac-toe-checker]
### Dependencies:
- node (version 8)
- JEST (version 25.0.0)

### Technology
- Javascript

## Introduction
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is  `0`  if a spot is empty,  `1`  if it is an "X", or  `2`  if it is an "O", like so:
```
[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
```

We want our function to return:
-   `-1`  if the board is not yet finished (there are empty spots),
-   `1`  if "X" won,
-   `2`  if "O" won,
-   `0`  if it's a cat's game (i.e. a draw).

You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

## Example
```
Input: [["", "", ""],["", "", ""],["", "", ""]]
Output: -1
```

```
Input: [["x", "x", "o"],["x", "o", "x"],["x", "o", "x"]]
Output: 1
```

## Note
After you checkout the repo run **npm install**.
You can run the tests with **npm test**