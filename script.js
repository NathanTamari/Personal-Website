let titleButton = document.getElementById("nameInBold");
titleButton.addEventListener("click", changeTitle);
let textToChange = document.getElementById("text");

const colorList = ["red", "orange", "green", "blue"];
let colorIndex = 0;

function changeTitle() {
    textToChange.style.color = colorList[colorIndex];
    colorIndex = (colorIndex + 1) % colorList.length;
}
