window.addEventListener("load", () => {
  runGame();
});

const runGame = () => {
  let gameDiv = document.getElementById("game");
  gameDiv.innerHTML = `<img src="images/a.png" alt="" id="a"></img>`;
  console.log("yoooo we doing it");
}