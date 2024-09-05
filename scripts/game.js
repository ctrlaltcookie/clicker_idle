const runGame = () => {
  console.log(document.cookie);
  let score = document.cookie.split(";").find((row) => row.startsWith("score"));
  let points = parseInt(score, 10) || 0;

  const MOODS = {
    HAPPY: "happy",
    SAD: "sad",
    ANGRY: "angry",
    HUNGRY: "hungry",
    NEUTRAL: "neutral"
  }

  let previousMoods = [];

  let gameDiv = document.getElementById("game");
  let pointTotal = document.getElementById("point_total")

  const addEmoti = () => {
    gameDiv.innerHTML += letterFactory();
  }

  const getRandomEmoti = () => {
    const EMOTI = [
      "@",
      "tilda",
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
    const item = event.target;
    if (item.dataset.upgrade === "true") {
      handleUpgrades(event.target);
    }
    if (item.dataset.mood === currentMood) {
      item.remove();
      incrementPoints();
      pointTotal.innerText = points;
      addEmoti();
    }
  }

  const handleUpgrades = (upgrade) => {
    if (upgrade.dataset.name === "lengthen") {
      upgrade.remove();
      points -= upgrade.dataset.cost;
      lengthenTimer(2);
    }
  }

  const lengthenTimer = (ammount) => {
    secondCountMax += ammount;
  }

  // allows for 0 based indexing now
  const getRandomInt = (max) => {
    let rand = Math.floor(Math.random() * max);
    return rand
  }

  const getRandomMood = () => {
    const rand = getRandomInt(9);
    let mood;
    const lastLastMood = previousMoods[0];
    const lastMood = previousMoods[1];

    if (rand === 0) {
      mood = MOODS.HAPPY;
    }
    if (rand === 1){
      mood = MOODS.SAD;
    }
    if (rand === 2) {
      mood = MOODS.ANGRY;
    }
    if (rand === 3) {
      mood = MOODS.HUNGRY;
    }
    if (rand >= 4) {
      mood = MOODS.NEUTRAL;
    }

    if (mood === lastMood && mood === lastLastMood) {
      return getRandomMood();
    }
    return mood;
  }

  const letterFactory = (mood) => {
    const emotiMood = mood || getRandomMood();
    const emoti = getRandomEmoti();
    return `<img data-mood="${emotiMood}" class="${emotiMood}" src="images/emoti/${emoti}.png" alt="" draggable="false"></img>`
  }

  // variables for navigation zxc
  const ONE_SECOND = 1000;
  const THIRTY_SECONDS = 30 * ONE_SECOND;
  let moodeLabel = document.getElementById("current_mood");
  
  let progressBar = document.getElementById("progress_bar")

  // the current mood has to be set so that
  // the click handler can access it as it's
  // global state
  let currentMood = getRandomMood();
  document.body.addEventListener("click", clickHandler);

  moodeLabel.innerText = currentMood;

  let secondCount = 0;
  let secondCountMax = 10;

  // push the first mood
  // hopefully leaving two moods
  // tbh the kind of game loop
  let gameTimer = setInterval(() => {
    if (secondCount >= secondCountMax) {
      secondCount = 0;
      currentMood = getRandomMood();
      moodeLabel.innerText = `click the ${currentMood} text`;
      moodeLabel.className = currentMood;
      if (previousMoods.length > 2) {
        previousMoods.shift();
      }
      previousMoods.push(currentMood);
    };
    secondCount++;
    progressBar.value = secondCount * secondCountMax;
    pointTotal.innerText = points;
    document.cookie = `score=${points} expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure`
  }, ONE_SECOND);

  // let saveTimer = setInterval(() => {
  //   document.cookie = `score=${points} expires=Fri, 31 Dec 9999 23:59:59 GMT; Secure`
  // }, THIRTY_SECONDS)
  //document.cookie
  for (let i = 0; i < 180; i++) {
    addEmoti();
  }
}

window.addEventListener("load", () => {
  runGame();
});