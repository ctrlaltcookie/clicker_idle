const runGame = () => {
  const MOODS = {
    HAPPY: "happy",
    SAD: "sad",
    ANGRY: "angry",
    HUNGRY: "hungry",
    NEUTRAL: "neutral"
  }

  let points = 0;
  let gameDiv = document.getElementById("game");
  let pointTotal = document.getElementById("point_total")

  const addEmoti = () => {
    gameDiv.innerHTML += letterFactory();
  }

  const getRandomEmoti = () => {
    const EMOTI = [
      "@",
      "~",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "sunglasses",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ]
    const rand = getRandomInt(28);
    return EMOTI[rand];
  }

  const incrementPoints = () => {
    if (currentMood === MOODS.NEUTRAL) return;
    points++
  }

  const clickHandler = (event) => {
    // event.target is the targeted image
    const emoti = event.target;
    if (emoti.dataset.mood === currentMood) {
      emoti.remove();
      incrementPoints();
      pointTotal.innerText = points;
      addEmoti();
    }
  }

  // allows for 0 based indexing now
  const getRandomInt = (max) => {
    let rand = Math.floor(Math.random() * max);
    return rand
  }

  const getRandomMood = () => {
    const rand = getRandomInt(9);
    if (rand === 0) {
      return MOODS.HAPPY;
    }
    if (rand === 1){
      return MOODS.ANGRY;
    } 
    if (rand === 2) {
      return MOODS.SAD;
    }
    if (rand === 3) {
      return MOODS.HUNGRY;
    }
    if (rand >= 4) {
      return MOODS.NEUTRAL;
    }
  }

  const letterFactory = (mood) => {
    const emotiMood = mood || getRandomMood();
    const emoti = getRandomEmoti();
    return `<img data-mood="${emotiMood}" class="${emotiMood}" src="images/emoti/${emoti}.png" alt="" draggable="false"></img>`
  }

  // variables for navigation zxc
  const ONE_SECOND = 1000;
  let moodeLabel = document.getElementById("current_mood");
  
  let progressBar = document.getElementById("progress_bar")

  // the current mood has to be set so that
  // the click handler can access it as it's
  // global state
  let currentMood = getRandomMood();
  document.body.addEventListener("click", clickHandler);

  moodeLabel.innerText = currentMood;

  let secondCount = 0;
  // tbh the kind of game loop
  let gameTimer = setInterval(() => {
    if (secondCount >= 10) {
      secondCount = 0;
      currentMood = getRandomMood();
      moodeLabel.innerText = `click the ${currentMood} text`;
      moodeLabel.className = currentMood;
    };
    secondCount++;
    progressBar.value = secondCount * 10;
  }, ONE_SECOND);

  for (let i = 0; i < 180; i++) {
    addEmoti();
  }
}

window.addEventListener("load", () => {
  runGame();
});