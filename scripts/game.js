const letterFactory = () => {
  return `<img src="images/a.png" alt="" id="a"></img>`
}

const ONE_SECOND = 1000;



const runGame = () => {
  document.body.addEventListener("click", clickHandler);
  let currentMood = "sad";

  let gameTimer = setInterval(() => {

  }, ONE_SECOND);

  let gameDiv = document.getElementById("game");

  gameDiv.innerHTML = letterFactory();
}

const clickHandler = (event) => {
  // event.target is the targeted image
}

window.addEventListener("load", () => {
  runGame();
});