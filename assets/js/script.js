//Declare variables

//to keep track of current question
let currentQuestion = 0;

//to keep track of the score
let score = 0;

//to calculate total number of questions
let lastQuestion = questions.length - 1;

//get elements
let wrongAnswerModal = document.getElementById('wrongAnswerModal');
let correctAnswerModal = document.getElementById('correctAnswerModal');

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
        showModalCorrectAnswer();
        score++;
    } else {
        showModalWrongAnswer()
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
        alert("End of quiz");
        displayResults();
    }
}


/**
 * Function to display results
 */
function displayResults() {
    let userScore = document.getElementById("user-score");
    userScore.innerHTML = score;
}


/**
 * Function to display modal box if user answer is wrong.
 */
 function showModalCorrectAnswer() {
    correctAnswerModal.style.display = "block";
 }


/**
 * Function to display modal box if user answer is wrong.
 * displayes the correct answer to the user.
 */
function showModalWrongAnswer() {
    wrongAnswerModal.style.display = "block";
    let keys = Object.keys(questions[currentQuestion]);
    keys.forEach((key) => {
        if (key == questions[currentQuestion].correct) {
            let correctAnswer= document.getElementById("correctAnswer");
            correctAnswer.innerHTML = questions[currentQuestion][key];
        }
    })
}