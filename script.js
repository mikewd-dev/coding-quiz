var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");

var p = document.createElement("p");

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
    question: "Arrays in javascript can be used to store?",
    answers: ["strings", "numbers", "other arrays", "all of the above"],
    correctResponse: 1,
  },
];
var possibleAnswers = [2, 3, 1];

var currentQuestion = 0;



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

      //check for an event listener for each answer button using the index as the selected answer when the button is clicked
      button.addEventListener("click", function () {
        checkAnswer(index);
      });
    });
  } else {
    // Display the end screen when there are no more questions
    renderEndScreen();
  }
}



function displayQuestions() {
  p.textContent = "";
  questionsScreen.style.display = "block";
}
startButton.addEventListener("click", function (e) {
  startScreen.style.display = "none";
  renderQuestions();
  displayQuestions();
});

function checkAnswer(selectedAnswer) {
  var question = questions[currentQuestion];


  if (selectedAnswer === question.correctResponse) {
    document.body.appendChild(p);
    p.textContent = "Correct";
  } else {
    p.textContent = "Wrong";
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
  questionsScreen.style.display = "none";
  endScreen.style.display = "block";
}
