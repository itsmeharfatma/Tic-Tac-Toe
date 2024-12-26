let box = document.querySelectorAll("button");
let mainBox = document.querySelector(".main-box");
let winner = document.querySelector("h2");
let playAgain = document.querySelector(".playAgain");
let restart = document.querySelector(".restart");
let xScore = document.querySelector(".x-score").querySelector("span");
let oScore = document.querySelector(".o-score").querySelector("span");

let marker = "O";
let index;
let storeXPatterns = [];
let storeOPatterns = [];
let storeXScore = 0;
let storeOScore = 0;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const styles = {
  O: { color: "brown", fontSize: "60px" },
  X: { color: "white", fontSize: "60px" },
};

const attachEventListeners = () => {
  // Marker Change:
  box.forEach((button) => {
    const handler = () => {
      const nextMarker = marker === "O" ? "X" : "O";
      const { color, fontSize } = styles[marker];

      button.style.color = color;
      button.style.fontSize = fontSize;
      marker = button.innerText = nextMarker;
    };
    button.addEventListener("click", handler, { once: true });
  });

  // Index of Clicked Button:
  box.forEach((button) => {
    const buttonIndexHandler = (e) => {
      const clickedButton = e.target;
      const children = Array.from(mainBox.children);
      index = children.indexOf(clickedButton);
      if (marker === "X") {
        let result = storeXPatterns.includes(index);
        if (result !== true) {
          storeXPatterns.push(index);
        }
        console.log("X Patterns:", storeXPatterns);
      } else {
        let result = storeOPatterns.includes(index);
        if (result !== true) {
          storeOPatterns.push(index);
        }
        console.log("O Patterns:", storeOPatterns);
      }
    };
    button.addEventListener("click", buttonIndexHandler, { once: true });
  });

  // Winner Check:
  box.forEach((button) => {
    const winnerCheck = () => {
      // X Winner Check:
      if (storeXPatterns.length >= 3) {
        for (let eachWinningPattern of winningPatterns) {
          let winnerX = [];

          for (let i of storeXPatterns) {
            let result = eachWinningPattern.includes(i);
            if (result === true) {
              winnerX.push(result);
            }
          }
          if (winnerX.length >= 3) {
            console.log("X Won..!");
            winner.innerText = "X Won..!";
            storeXScore++;
            xScore.innerText = storeXScore;
          }
        }
      }

      // O Winner Check:
      if (storeOPatterns.length >= 3) {
        for (let eachWinningPattern of winningPatterns) {
          let winnerO = [];

          for (let i of storeOPatterns) {
            let result = eachWinningPattern.includes(i);
            if (result === true) {
              winnerO.push(result);
            }
          }
          if (winnerO.length >= 3) {
            console.log("O Won..!");
            winner.innerText = "O Won..!";
            storeOScore++;
            oScore.innerText = storeOScore;
          }
        }
      }
    };
    button.addEventListener("click", winnerCheck, { once: true });
  });
};

attachEventListeners();

// Play Again:
playAgain.addEventListener("click", () => {
  marker = "O";
  storeXPatterns = [];
  storeOPatterns = [];
  winner.innerText = "";

  box.forEach((button) => {
    button.innerText = "";
    button.style.color = "";
    button.style.fontSize = "";
    button.replaceWith(button.cloneNode(true));
  });

  box = document.querySelectorAll("button");
  attachEventListeners();
});

// Restart Game:
restart.addEventListener("click", () => {
  marker = "O";
  storeXPatterns = [];
  storeOPatterns = [];
  storeXScore = 0;
  storeOScore = 0;
  winner.innerText = "";
  xScore.innerText = 0;
  oScore.innerText = 0;

  box.forEach((button) => {
    button.innerText = "";
    button.style.color = "";
    button.style.fontSize = "";
    button.replaceWith(button.cloneNode(true));
  });

  box = document.querySelectorAll("button");
  attachEventListeners();
});
