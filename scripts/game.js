const runGame = () => {
  const MOODS = {
    HAPPY: "happy",
    SAD: "sad",
    ANGRY: "angry",
    HUNGRY: "hungry"
  }

  const STYLES = {
    [MOODS.ANGRY]: "float-vertical",
    [MOODS.HAPPY]: "float-horizontal",
    [MOODS.SAD]: "float-horizontal",
    [MOODS.HUNGRY]: "float-horizontal"
  }

  let points = 0;
  let gameDiv = document.getElementById("game");

  const addEmotee = () => {
    gameDiv.innerHTML += letterFactory();
  }

  const clickHandler = (event) => {
    // event.target is the targeted image
    const emotee = event.target;
    if (emotee.dataset.mood === currentMood) {
      emotee.remove();
      points++;
      addEmotee();
    }
  }

  const getRandomInt = (max, plus = true) => {
    let rand = Math.floor(Math.random() * max);
    return plus ? rand + 1 : rand
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

  const letterFactory = (mood) => {
    const emoteeMood = getRandomMood();
    return `<img data-mood="${emoteeMood}" class="${STYLES[emoteeMood]}" src="images/a.png" alt="" id="a" draggable="false"></img>`
  }

  // variables for navigation zxc
  const ONE_SECOND = 1000;
  const TEN_SECONDS = 10 * ONE_SECOND
  let moodeLabel = document.getElementById("current_mood");
  
  let progressBar = document.getElementById("progress_bar")

  // the current mood has to be set so that
  // the click handler can access it as it's
  // global state
  let currentMood = getRandomMood();
  document.body.addEventListener("click", clickHandler);

  moodeLabel.innerText = currentMood;

  let secondCount = 0;
  let gameTimer = setInterval(() => {
    if (secondCount >= 10) {
      secondCount = 0;
      currentMood = getRandomMood();
      moodeLabel.innerText = currentMood;
      moodeLabel.className = STYLES[currentMood];
    };
    secondCount++;

    progressBar.value = secondCount * 10;
  }, ONE_SECOND);

  for (let i = 0; i < 180; i++) {
    addEmotee();
  }
}

window.addEventListener("load", () => {
  runGame();
});