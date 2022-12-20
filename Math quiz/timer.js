// timer length in seconds
let timeRemaining = 60;

// define the function that updates the timer
function updateTimer() {
  timeRemaining--; // decrement time remaining by one second
  document.getElementById("time-remaining").innerHTML = timeRemaining;
  if (timeRemaining == 0) {
    clearInterval(timerInterval);
    // show game over message or submit quiz
  }
}

// define the interval that updates the timer every second
var timerInterval;

// get the "Start Quiz" button
const startButton = document.querySelector("#start");

// add an event listener to the button that starts the timer when clicked
startButton.addEventListener("click", function() {
  // start the timer by setting the interval that updates the timer
  timerInterval = setInterval(updateTimer, 1000);
});
  