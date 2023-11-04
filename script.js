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
            correctResponse: 2
    },
    {
        question: "The condition in an If Else statement is usually enclosed within________",
        answers: ["quotes",
            "curly brackets",
            "parentheses",
            "square brackets"],
            correctResponse:3
    },
    {
        question: "Arrays in javascript can be used to store?",
        answers: ["strings",
            "numbers",
            "other arrays",
            "all of the above"],
            correctResponse: 1
    }
];
var possibleAnswers =[2, 3, 1]



var currentQuestion = 0;

function renderQuestions(){
questionsScreen.innerHTML="";
    var question= questions[currentQuestion];
    var h2 = document.createElement('h2');

    h2.textContent = question.question;
    questionsScreen.appendChild(h2);

    var answers= question.answers
    answers.forEach(function(answer, index){
var button = document.createElement('button');
button.setAttribute("style", "display: block");

button.textContent = answer;
questionsScreen.appendChild(button);

//check for an event listener for each answer button

button.addEventListener("click", function(){
    checkAnswer(index);
});

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

function checkAnswer(selectedAnswer){
    //check which button was clicked and if the index of the button clicked is the correct answer
    var question =questions[currentQuestion];

    var p = document.createElement("p");
    //if the button clicked is the correct response
    if(selectedAnswer === questions[currentQuestion].correctResponse) {
    // show correct
    document.body.appendChild(p);
    p.textContent="Correct";
    } else {
//otherwise wrong
document.body.appendChild(p);
p.textContent="Wrong";
    }
if(currentQuestion < questions.length){
currentQuestion++;
renderQuestions();
}
}

