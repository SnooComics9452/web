const word = "Snoocomics9452";
let char = 0;
let animationStarted = false;

function animateText() {
  document.getElementById("text").style.fontFamily = "'Raleway', sans-serif";
  document.getElementById("text").style.fontSize = "36px";
  document.getElementById("text").innerHTML = word.substring(0, char);

  if (char < word.length) {
    requestAnimationFrame(animateText);
    char += 1;
  }
}

window.onload = function() {
  const textElem = document.getElementById("text");
  textElem.style.animation = "enter 2s ease-in-out";
  textElem.addEventListener("animationstart", function() {
    // Set animationStarted to true when the animation starts
    animationStarted = true;
  });

  textElem.addEventListener("animationend", function() {
    // Reset char and animationStarted when the animation ends
    char = 0;
    animationStarted = false;
  });

  if (!animationStarted) {
    // Only trigger the animation if it hasn't started yet
    textElem.style.animationPlayState = "paused";
    animateText();
    textElem.style.animationPlayState = "running";
  }
};