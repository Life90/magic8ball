document.querySelector("button").onclick = () => {
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

  let randomImg = Math.floor(Math.random() * magicBallsImg.length);
  let answers = document.getElementById("answers");
  let fortune = document.createElement("img");
  answers.appendChild(fortune);
  fortune.id = "answer2";
  document.getElementById("answer2").src = magicBallsImg[randomImg];

  answers.classList.add("shake");

  // ball.classList.add("rotate");

  setTimeout(function () {
    answers.classList.remove("shake");
  }, 1500);

  // setTimeout(function () {
  //   ball.classList.remove("rotate");
  // }, 1500);

  const input = document.querySelector("input").value;
  let disabled = document.getElementById("test");
  if (input.length <= 3) {
    disabled = true;
    alert("Hey you need to enter your question first");
  } else if (input.length > 3) {
    disabled = false;
  }
};

function showImg() {
  let congratsImg = new Array(
    "images/congrats.png",
    "images/dog.png",
    "images/bitwise.png"
  );
  let congratsRandomImg = Math.floor(Math.random() * congratsImg.length);
  let congra = document.getElementById("congrats");
  let logo = document.createElement("img");
  congra.appendChild(logo);
  logo.id = "congrats2";
  document.getElementById("congrats2").src = congratsImg[congratsRandomImg];
  congra.classList.add("shake");
  setTimeout(function () {
    congra.classList.remove("shake");
  }, 3000);
}
