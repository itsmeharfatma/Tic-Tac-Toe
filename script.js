let box = document.querySelectorAll("button");

let marker = "O";

box.forEach((button) => {
    button.addEventListener("click", (e) => {
        button.style.color = "white";
        button.style.fontSize = "40px";
        console.log(button.innerText = marker);
        // console.log(button);
    });
});

