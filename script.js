var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsScreen = document.querySelector("#questions");


var questions = [

    {
        question: "Commonly used data types do not include?",
        answers: ["strings",
            "booleans",
            "alerts",
            "numbers"],
            correctAnswerIndex: 2
    },
    {
        question: "The condition in an If Else statement is usually enclosed within________",
        answers: ["quotes",
            "curly brackets",
            "parentheses",
            "square brackets"],
            correctAnswerIndex:3
    },
    {
        question: "Arrays in javascript can be used to store?",
        answers: ["strings",
            "numbers",
            "other arrays",
            "all of the above"],
            correctAnswerIndex: 1
    }
]


var currentQuestion = 0;
// var setQuestions = JSON.stringify("questions", questions);
// console.log(setQuestions);

function renderQuestions(){
questionsScreen.innerHTML="";
    var question= questions[currentQuestion];
    var h2 = document.createElement('h2');

    h2.textContent = question.question;
    questionsScreen.appendChild(h2);

    var answers= question.answers
    answers.forEach(function(answer){
var button = document.createElement('button');
button.setAttribute("style", "display: block");
button.textContent = answer;
questionsScreen.appendChild(button);

    })
}


function displayQuestions(){
    questionsScreen.style.display="block";
}
startButton.addEventListener("click", function (e) {

startScreen.style.display='none';
renderQuestions();
displayQuestions();
});

