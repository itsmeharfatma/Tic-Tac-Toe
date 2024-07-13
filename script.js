let box = document.querySelectorAll("button");
let mainBox = document.querySelector(".main-box");
// console.dir(mainBox);

let boxCount = 0;
let marker = "O";

const styles = {
  O: { color: "brown", fontSize: "40px" },
  X: { color: "white", fontSize: "40px" },
};

box.forEach((button) => {
  boxCount += 1;
  const handler = () => {
    const nextMarker = marker === "O" ? "X" : "O";
    const { color, fontSize } = styles[marker];

    button.style.color = color;
    button.style.fontSize = fontSize;
    marker = button.innerText = nextMarker;
  };
  console.log(boxCount);
  button.addEventListener("click", handler, { once: true });
});

const buttonIndexHandler = (e) => {
  const clickedButton = e.target;
  const children = Array.from(mainBox.children);
  const index = children.indexOf(clickedButton);
  console.log("Clicked element index:", index);
};
mainBox.addEventListener("click", buttonIndexHandler);

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
