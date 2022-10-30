// Create questions for the game

let questions = [
    {
        questionImg: 'assets/images/peugeot-logo.png',
        answerOptionA: 'mercedes',
        answerOptionB: 'peugeot',
        answerOptionC: 'tesla',
        correct: 'answerOptionB'
    },
    {
        questionImg: 'assets/images/wiesmann-logo.png',
        answerOptionA: 'seat',
        answerOptionB: 'honda',
        answerOptionC: 'tesla',
        correct: 'wiesmann'
    }
]


//Declare variables
let currentQuestion = 0;


/**
 * Function to render question
 */
function displayQuestion() {
    // display car logo image
    let questionImg = document.getElementById('question-img');
    questionImg.innerHTML = "<img src='assets/images/peugeot-logo.png'>";

    //display alternative answers
    let answerOptionA = document.getElementById("answerOptionA");
    answerOptionA.innerHTML = questions[currentQuestion].answerOptionA;

    let answerOptionB = document.getElementById("answerOptionB");
    answerOptionB.innerHTML = questions[currentQuestion].answerOptionB;

    let answerOptionC = document.getElementById("answerOptionC");
    answerOptionC.innerHTML = questions[currentQuestion].answerOptionC;
}

displayQuestion()


/**
 * Function to check user answer
 */
function checkAnswer(userAnswer) {
    if (userAnswer == questions[currentQuestion].correct){
        alert("Answer correct");
    } else {
        alert("Wrong answer");
    }
}