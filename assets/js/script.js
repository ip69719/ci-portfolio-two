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
        answerOptionC: 'wiesmann',
        correct: 'answerOptionC'
    }
]


//Declare variables

//to keep track of current question
let currentQuestion = 0;

//to calculate total number of questions
let lastQuestion = questions.length - 1;


/**
 * Function to render question
 */
function displayQuestion() {
    // display car logo image
    let questionImg = document.getElementById('question-img');
    questionImg.innerHTML = "<img src="+ questions[currentQuestion].questionImg +">";

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
    nextQuestion() 
}

/**
 * Function to render next question
 */
function nextQuestion() {
    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
        alert("End of quiz")
    }
}