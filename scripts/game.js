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

  const getRandomInt = (max, plus = true) => {
    let rand = Math.floor(Math.random() * max);
    return plus ? rand + 1 : rand
  }

  const getRandomMood = () => {
    const rand = getRandomInt(10);
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
    if (rand >= 5) {
      return MOODS.NEUTRAL;
    }
  }

  const letterFactory = (mood) => {
    const emotiMood = mood || getRandomMood();
    return `<img data-mood="${emotiMood}" class="${emotiMood}" src="images/emoti/${randomEmoti}.png" alt="" draggable="false"></img>`
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