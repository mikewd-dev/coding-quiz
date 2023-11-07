var highScoresList = document.querySelector("#highscores");
var clearHighScoresList = document.querySelector("#clear");

//display high scores
function displayHighScores() {
  highScoresList.innerHTML = "";
  var highScoresData = JSON.parse(localStorage.getItem("highScores")) || [];

  highScoresData.sort((a, b) => b.score - a.score);

  highScoresData.forEach(function (scoreData, index) {
    var li = document.createElement("li");
    li.textContent = `${scoreData.initials} - ${scoreData.score}`;
    highScoresList.appendChild(li);
  });
}

//clear high scores
function clearHighScores() {
  clearHighScoresList.addEventListener("click", function () {
    while (highScoresList.firstChild) {
      highScoresList.removeChild(highScoresList.firstChild);
    }

    localStorage.removeItem("highScores");
  });
}

displayHighScores();

clearHighScores();
