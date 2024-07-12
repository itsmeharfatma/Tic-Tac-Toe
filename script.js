let box = document.querySelectorAll("button");

let marker = "O";

const styles = {
  O: { color: "brown", fontSize: "40px" },
  X: { color: "white", fontSize: "40px" },
};

box.forEach((button) => {
  const handler = () => {
    const nextMarker = marker === "O" ? "X" : "O";
    const { color, fontSize } = styles[marker];

    button.style.color = color;
    button.style.fontSize = fontSize;
    marker = button.innerText = nextMarker;
    console.log(marker);
  };

  button.addEventListener("click", handler, { once: true });
});
