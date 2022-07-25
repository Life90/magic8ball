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
  document.getElementById("magic").src = magicBallsImg[randomImg];
  let ball = document.getElementById("magic");
  ball.classList.add("shake");
  setTimeout(function () {
    ball.classList.remove("shake");
  }, 1500);
  // if (input.value.length <= 5) {
  //   document.getElementById("test").disabled = true;
  // }
};
function showImg() {
  document.getElementById("congrats").src = "images/congrats.png";
  let img = document.getElementById("congrats");
  img.classList.add("shake");
  setTimeout(function () {
    img.classList.remove("shake");
  }, 3000);
}
