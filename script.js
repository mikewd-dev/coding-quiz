var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var timerElement = document.querySelector("#time");
var finalScore = document.querySelector("#final-score");
var submitScoreButton = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials");

var timer;
var timerCount = 60;
var p = document.createElement("p");

//Set up a series of questions
var questions = [
  {
    question: "Commonly used data types do not include?",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctResponse: 2,
  },
  {
    question:
      "The condition in an If Else statement is usually enclosed within________",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctResponse: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store?",
    answers: ["strings", "numbers", "other arrays", "all of the above"],
    correctResponse: 3,
  },
];
var possibleAnswers = [2, 2, 3];

var currentQuestion = 0;


// to present the questions to the user
function renderQuestions() {
  if (currentQuestion < questions.length) {
    questionsScreen.innerHTML = "";
    var question = questions[currentQuestion];
    var h2 = document.createElement("h2");
    h2.textContent = question.question;
    questionsScreen.appendChild(h2);

    var answers = question.answers;
    answers.forEach(function (answer, index) {
      var button = document.createElement("button");
      button.setAttribute("style", "display: block");
      button.textContent = answer;
      questionsScreen.appendChild(button);

      button.addEventListener("click", function () {
        checkAnswer(index);
      });
    });
  } else {
    renderEndScreen();
  }
}

function displayQuestions() {
  p.textContent = "";
  questionsScreen.style.display = "block";
}

//start timer and show the questions
startButton.addEventListener("click", function (e) {
  startScreen.style.display = "none";
  countDownTimer();
  renderQuestions();
  displayQuestions();
});

//compare the user answers with the correct answers
function checkAnswer(selectedAnswer) {
  var question = questions[currentQuestion];

  if (selectedAnswer === question.correctResponse) {
    document.body.appendChild(p);
    p.setAttribute("style", "font-style: italic");
    p.textContent = "Correct!";
  } else {
    p.textContent = "Wrong!";
    timerCount -= 10;
  }

  document.body.appendChild(p);

  if (currentQuestion < questions.length) {
    currentQuestion++;
    renderQuestions();
  } else {
    renderEndScreen();
  }
}


function renderEndScreen() {
  timerElement.textContent = timerCount;
  questionsScreen.style.display = "none";
  endScreen.style.display = "block";
  finalScore.textContent = timerCount;
  stopTimer();
}

function countDownTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount <= 0) {
      clearInterval(timer);
      renderEndScreen();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}
//submit the final score
submitScoreButton.addEventListener("click", function () {
  var initials = initialsInput.value;
  var score = timerCount;
  var highScoresData = JSON.parse(localStorage.getItem("highScores")) || [];
  highScoresData.push({ initials, score });
  localStorage.setItem("highScores", JSON.stringify(highScoresData));
  document.location.href = "highscores.html";
});
