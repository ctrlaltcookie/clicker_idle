const letterFactory = () => {
  return `<img src="images/a.png" alt="" id="a"></img>`
}

let currentMood = "sad";

const runGame = () => {
  let gameDiv = document.getElementById("game");
  gameDiv.innerHTML = letterFactory();
}

const clickHandler = (event) => {
  // event.target is the targeted image
}

window.addEventListener("load", () => {
  runGame();

  document.body.addEventListener("click", clickHandler);
});