let box = document.querySelectorAll("button");
let mainBox = document.querySelector(".main-box");

let marker = "O";
let index;
let storeXPatterns = [];
let storeOPatterns = [];

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
  O: { color: "brown", fontSize: "40px" },
  X: { color: "white", fontSize: "40px" },
};

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
    if (storeXPatterns.length >= 2) {
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
        }
      }
    }

    // O Winner Check:
    if (storeOPatterns.length >= 2) {
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
        }
      }
    }
  };
  button.addEventListener("click", winnerCheck, { once: true });
});
