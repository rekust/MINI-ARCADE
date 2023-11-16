var rows = 3;
var columns = 3;
var puzzleOrder = [
  "./imgs/0-0.png",
  "./imgs/0-1.png",
  "./imgs/0-2.png",
  "./imgs/1-0.png",
  "./imgs/1-1.png",
  "./imgs/1-2.png",
  "./imgs/2-0.png",
  "./imgs/2-1.png",
  "./imgs/blank.png",
];

var currentTile;
var blankTile;
var turns = 0;

var imgOrder = shuffledOrder([...puzzleOrder]); //spread operator

function shuffledOrder(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1)); //Math.random generates a floating value between 0(inclusive) and 1(exclusive)

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; //swapping the elements
  }
  return array;
}

window.onload = function start() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = imgOrder.shift();

      if (tile.src.includes("blank")) {
        blankTile = tile;
      }

      tile.addEventListener("click", tileClick);
      document.getElementById("board").append(tile); //appends the img elements into the div
    }
  }
};

function tileClick() {
  currentTile = this; //refers to the current tile that is being clicked

  let currentCoords = currentTile.id.split("-");
  let r1 = parseInt(currentCoords[0]);
  let c1 = parseInt(currentCoords[1]);

  let blankCoords = blankTile.id.split("-");
  let r2 = parseInt(blankCoords[0]);
  let c2 = parseInt(blankCoords[1]);

  let moveLeft = r1 == r2 && c1 - 1 == c2;
  let moveRight = r1 == r2 && c1 + 1 == c2;
  let moveUp = c1 == c2 && r1 - 1 == r2;
  let moveDown = c1 == c2 && r1 + 1 == r2;

  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

  if (isAdjacent) {
    let currentImg = currentTile.src;
    let blankImg = blankTile.src;

    blankTile.src = currentImg;
    currentTile.src = blankImg;

    blankTile = currentTile;

    turns += 1;
    document.getElementById("turns").innerText = turns;

    if (check()) {
      solution();
      alert(`Congrats! You won in ${turns} turns`);
    }
  }
}

var solutionClicked = 0;
var solutionOrder = [
  "0-0",
  "0-1",
  "0-2",
  "1-0",
  "1-1",
  "1-2",
  "2-0",
  "2-1",
  "2-2",
];

function solution() {
  solutionClicked++;
  if (solutionClicked == 1) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        let tileId = r.toString() + "-" + c.toString();
        let newTile = document.getElementById(tileId);
        newTile.src = "./imgs/" + solutionOrder.shift() + ".png";
      }
    }
    document.getElementById("sol").innerText = "Reset";
  } else {
    location.reload();
  }

  if (solutionClicked == 1) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        let tileId = r.toString() + "-" + c.toString();
        let newTile = document.getElementById(tileId);
        newTile.addEventListener("click", function () {
          location.reload();
        });
      }
    }
  }
}

function check() {
  var currentOrder = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tileId = r.toString() + "-" + c.toString();
      let checkTile = document.getElementById(tileId);
      currentOrder.push(checkTile.src);
    }
  }
  console.log(currentOrder);
  for (let i = 0; i < currentOrder.length; i++) {
    if (currentOrder[i] !== puzzleOrder[i]) {
      return false;
    }
  }

  return true;
}

function back() {
  window.location.href= "/MINI-ARCADE/card.html";
}