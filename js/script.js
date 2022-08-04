function shake() {
  let luck = document.getElementById("answers2");
  if (luck != null) {
    luck.parentNode.removeChild(luck);
  }
  answers.classList.add("shake");

  setTimeout(function () {
    answers.classList.remove("shake");
  }, 3000);

  setTimeout(function () {
    getAnswers();
  }, 0);
}

function getAnswers() {
  let magicBallsImg = new Array(
    "images/magic8ball_1.png",
    "images/magic8ball_3.png",
    "images/magic8ball_2.png",
    "images/magic8ball_4.png",
    "images/magic8ball_5.png",
    "images/magic8ball_6.png",
    "images/magic8ball_7.png",
    "images/magic8ball_8.png",
    "images/magic8ball_9.png",
    "images/magic8ball_10.png",
    "images/magic8ball_11.png",
    "images/magic8ball_12.png",
    "images/magic8ball_13.png",
    "images/magic8ball_14.png",
    "images/magic8ball_15.png",
    "images/magic8ball_16.png",
    "images/magic8ball_7.png",
    "images/magic8ball_18.png",
    "images/magic8ball_19.png",
    "images/magic8ball_20.png",
    "images/magic8ball_extra.png",
    "images/magic8ball_start.png"
  );

  let randomImg =
    magicBallsImg[Math.floor(Math.random() * magicBallsImg.length)];
  let answers = document.getElementById("answers");
  let newImg = document.createElement("img");
  newImg.setAttribute("id", "answers2");
  newImg.src = randomImg;
  answers.appendChild(newImg);

  const input = document.querySelector("input").value;
  let disabled = document.getElementById("test");
  if (input.length <= 5) {
    newImg.src = "images/magic8ball_14.png";
    alert("Hey you need to enter your question first");
  } else if (input.length > 5) {
    disabled = false;
  }
}

function showImg() {
  let congra = document.getElementById("congrats");
  let motivation = document.getElementById("congrats2");
  if (motivation != null) {
    motivation.parentNode.removeChild(motivation);
  }

  congra.classList.add("shake");

  setTimeout(function () {
    congra.classList.remove("shake");
  }, 1500);

  let congratsImg = new Array(
    "images/congrats.png",
    "images/dog.png",
    "images/bitwise.png"
  );
  let congratsRandomImg =
    congratsImg[Math.floor(Math.random() * congratsImg.length)];
  let bonas = document.createElement("img");
  congra.appendChild(bonas);
  bonas.setAttribute("id", "congrats2");
  bonas.src = congratsRandomImg;
}
