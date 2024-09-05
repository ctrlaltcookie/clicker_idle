const letterFactory = () => {
  return `<img src="images/a.png" alt="" id="a"></img>`
}

const runGame = () => {
  let gameDiv = document.getElementById("game");
  gameDiv.innerHTML = letterFactory();
}

window.addEventListener("load", () => {
  runGame();

  document.body.addEventListener("click", () => {
    window.alert("you clicked SOMEWHERE on the screen you little gremlin you");
  });
});