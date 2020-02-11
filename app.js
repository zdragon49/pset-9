///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let xScore = 0
let oScore = 0
let tieScore = 0
let playerTurn = "X"
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("reset-score").onclick = scoreReset;
document.getElementById("player-turn").onclick = whoseTurn;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  turn = "X";
  win = null;

  render();
}
function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  if (win === "X") {
      xScore = xScore + 1
    }
    else if (win === "O") {
      oScore = oScore + 1
    }
    else if (win === "T") {
      tieScore = tieScore + 1
    }
    xWins.innerHTML = xScore
    oWins.innerHTML = oScore
    tieWins.innerHTML = tieScore

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}
function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();

      render();
    }
  }
}
function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
}

function scoreReset(){
  xScore = 0
  oScore = 0
  tieScore = 0

  xWins.innerHTML = xScore
  oWins.innerHTML = oScore
  tieWins.innerHTML = tieScore
}

function whoseTurn() {
    init();
    if (playerTurn === "X") {
        turn = "O";
        playerTurn = "O";
    }
    else {
        turn = "X";
        playerTurn = "X"
    }
    document.getElementById("player-turn").innerHTML = playerTurn;
    render();
}
