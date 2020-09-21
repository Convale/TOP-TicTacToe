let gameValues = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 1;

const Player = function () {
  this.wins = 0;
  this.incrementWin = function () {
    this.wins++;
  };
};
const player1 = new Player();
const player2 = new Player();

function takeTurn(details) {
  const tileNum = parseInt(details.target.getAttribute("id"));
  if (gameValues[tileNum] == "" && currentPlayer != 0) {
    const currentPlayerIcon = currentPlayer == 1 ? "X" : "O";
    gameValues[tileNum] = currentPlayerIcon;
    gameBoard();
    checkWin();
    currentPlayer = currentPlayer == 1 ? 2 : currentPlayer == 2 ? 1 : 0;
  }
}

function checkWin() {
  const currentPlayerIcon = currentPlayer == 1 ? "X" : "O";
  if (
    gameValues[0] == currentPlayerIcon &&
    gameValues[1] == currentPlayerIcon &&
    gameValues[2] == currentPlayerIcon
  ) {
    document.getElementById("0").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("1").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("2").style.backgroundColor = "rgb(149, 186, 147)";
    currentPlayer == 1 ? player1.incrementWin() : player2.incrementWin();
    playerWinsBanner();
    currentPlayer = 0;
  } else if (
    gameValues[3] == currentPlayerIcon &&
    gameValues[4] == currentPlayerIcon &&
    gameValues[5] == currentPlayerIcon
  ) {
    document.getElementById("3").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("4").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("5").style.backgroundColor = "rgb(149, 186, 147)";
    currentPlayer == 1 ? player1.incrementWin() : player2.incrementWin();
    playerWinsBanner();
    currentPlayer = 0;
  } else if (
    gameValues[6] == currentPlayerIcon &&
    gameValues[7] == currentPlayerIcon &&
    gameValues[8] == currentPlayerIcon
  ) {
    document.getElementById("6").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("7").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("8").style.backgroundColor = "rgb(149, 186, 147)";
    currentPlayer == 1 ? player1.incrementWin() : player2.incrementWin();
    playerWinsBanner();
    currentPlayer = 0;
  } else if (
    gameValues[0] == currentPlayerIcon &&
    gameValues[3] == currentPlayerIcon &&
    gameValues[6] == currentPlayerIcon
  ) {
    document.getElementById("0").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("3").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("6").style.backgroundColor = "rgb(149, 186, 147)";
    currentPlayer == 1 ? player1.incrementWin() : player2.incrementWin();
    playerWinsBanner();
    currentPlayer = 0;
  } else if (
    gameValues[1] == currentPlayerIcon &&
    gameValues[4] == currentPlayerIcon &&
    gameValues[7] == currentPlayerIcon
  ) {
    document.getElementById("1").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("4").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("7").style.backgroundColor = "rgb(149, 186, 147)";
    currentPlayer == 1 ? player1.incrementWin() : player2.incrementWin();
    playerWinsBanner();
    currentPlayer = 0;
  } else if (
    gameValues[2] == currentPlayerIcon &&
    gameValues[5] == currentPlayerIcon &&
    gameValues[8] == currentPlayerIcon
  ) {
    document.getElementById("2").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("5").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("8").style.backgroundColor = "rgb(149, 186, 147)";
    currentPlayer == 1 ? player1.incrementWin() : player2.incrementWin();
    playerWinsBanner();
    currentPlayer = 0;
  } else if (
    gameValues[0] == currentPlayerIcon &&
    gameValues[4] == currentPlayerIcon &&
    gameValues[8] == currentPlayerIcon
  ) {
    document.getElementById("0").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("4").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("8").style.backgroundColor = "rgb(149, 186, 147)";
    currentPlayer == 1 ? player1.incrementWin() : player2.incrementWin();
    playerWinsBanner();
    currentPlayer = 0;
  } else if (
    gameValues[2] == currentPlayerIcon &&
    gameValues[4] == currentPlayerIcon &&
    gameValues[6] == currentPlayerIcon
  ) {
    document.getElementById("2").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("4").style.backgroundColor = "rgb(149, 186, 147)";
    document.getElementById("6").style.backgroundColor = "rgb(149, 186, 147)";
    currentPlayer == 1 ? player1.incrementWin() : player2.incrementWin();
    playerWinsBanner();
    currentPlayer = 0;
  } else if (
    gameValues[0] != "" &&
    gameValues[1] != "" &&
    gameValues[2] != "" &&
    gameValues[3] != "" &&
    gameValues[4] != "" &&
    gameValues[5] != "" &&
    gameValues[6] != "" &&
    gameValues[7] != "" &&
    gameValues[8] != ""
  ) {
    alert("tie");
    currentPlayer = 0;
  }
}

resetButton.addEventListener("click", () => {
  gameValues = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = 1;
  gameBoard();
});

function gameBoard() {
  const gameArray = document.querySelector("#gameArray");
  gameArray.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    const gameTile = document.createElement("div");
    gameTile.setAttribute("class", "boardDiv");
    gameTile.setAttribute("id", i);
    gameTile.addEventListener("click", takeTurn);
    gameArray.appendChild(gameTile);

    const addElement = document.createElement("il");
    const textNode = document.createTextNode(gameValues[i]);
    addElement.setAttribute("id", i);
    addElement.appendChild(textNode);
    document.getElementById(i).appendChild(addElement);
  }
}

function playerWinsBanner() {
  gameArray = document.querySelector("#player1").innerHTML =
    "Player 1: " + player1.wins;
  gameArray = document.querySelector("#player2").innerHTML =
    "Player 2: " + player2.wins;
}

(function main() {
  playerWinsBanner();
  gameBoard();
})();
