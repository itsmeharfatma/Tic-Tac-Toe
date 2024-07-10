let box = document.querySelectorAll("button");

let marker = ""; //x,

box.forEach((button) => {
  const handler = () => {
    if (marker === "") {
      button.style.color = "brown";
      button.style.fontSize = "40px";

      marker = button.innerText = "X";
      console.log(marker);
    } else if (marker === "O") {
      button.style.color = "brown";
      button.style.fontSize = "40px";

      marker = button.innerText = "X";
      console.log(marker);
    } else if (marker === "X") {
      button.style.color = "white";
      button.style.fontSize = "40px";

      marker = button.innerText = "O";
      console.log(marker);
    }
  };

  button.addEventListener("click", handler);

  // button.removeEventListener("click", handler);
});
