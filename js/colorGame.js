var numberOfSquars = 6;
var colors = generateRandomColors(numberOfSquars);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode");

for (var i = 0; i < modeBtn.length; i++) {
  modeBtn[i].addEventListener("click", function () {
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    this.classList.add("selected");

    this.textContent === "Easy" ? (numberOfSquars = 3) : (numberOfSquars = 6);
    reset();
  });
}

function reset() {
  colors = generateRandomColors(numberOfSquars);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else squares[i].style.display = "none";
  }
  resetBtn.textContent = "New Color";
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
}

resetBtn.addEventListener("click", function () {
  reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.background;
    if (clickedColor == pickedColor) {
      messageDisplay.textContent = "Correct !";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetBtn.textContent = "Play again?";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
