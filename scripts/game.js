const runGame = () => {

  const letterFactory = () => {
    return `<img src="images/a.png" alt="" id="a"></img>`
  }

  const getRandomInt = (max, plus = true) => {
    let rand = Math.floor(Math.random() * max);
    return plus ? rand + 1 : rand
  }

  const MOODS = {
    HAPPY: "happy",
    SAD: "sad",
    ANGRY: "angry",
    HUNGRY: "hungry"
  }

  const getRandomMood = () => {
    const rand = getRandomInt(3);
    if (rand === 1) {
      return MOODS.HAPPY;
    }
    if (rand === 2){
      return MOODS.ANGRY;
    } 
    if (rand === 3) {
      return MOODS.SAD;
    }
    if (rand === 4) {
      return MOODS.HUNGRY;
    }
  }

  // variables for navigation zxc
  const ONE_SECOND = 1000;
  const TEN_SECONDS = 10 * ONE_SECOND
  let moodeLabel = document.getElementById("current_mood");
  
  let progressBar = document.getElementById("progress_bar")

  document.body.addEventListener("click", clickHandler);

  let currentMood = getRandomMood();
  moodeLabel.innerText = currentMood;

  let secondCount = 0;
  let gameTimer = setInterval(() => {
    if (secondCount >= 10) {
      secondCount = 0;
      currentMood = getRandomMood();
      moodeLabel.innerText = currentMood;
    };
    secondCount++;

    progressBar.value = secondCount * 10;
  }, ONE_SECOND);

  let gameDiv = document.getElementById("game");

  gameDiv.innerHTML += letterFactory();
}

const clickHandler = (event) => {
  // event.target is the targeted image
}

window.addEventListener("load", () => {
  runGame();
});