//Declare variables

//to keep track of current question
let currentQuestion = 0;

//to keep track of the score
let score = 0;

//to calculate total number of questions
let lastQuestion = questions.length - 1;

//get the start button element and add event listener to it
let startButton = document.getElementById("btn-start");
startButton.addEventListener("click", startQuiz);

//Get the restart button element and add event listener to it
let btnRestart = document.getElementById("btn-restart");
btnRestart.addEventListener("click", restartQuiz);

//Get the restart button element and add event listener to it
let btnQuit = document.getElementById("btn-quit");
btnQuit.addEventListener("click", returnHome);

//get home section
let homeSection = document.getElementById("home-section");

//get quiz section
let quizSection = document.getElementById("quiz-section");

//get results section
let resultsSection = document.getElementById("results-section");

//get modal
let modalFeedback = document.getElementById('modal-feedback');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

//Get total number of questions in the quiz
let  totalQuestions = document.getElementById("total-questions");
totalQuestions.innerHTML = questions.length;


/**
 * Called when start button is clicked, hides the home section content of the page and
 * takes user to quiz area
 */
 function startQuiz(){
    homeSection.style.display = 'none';
    quizSection.style.display = 'block';
    displayQuestion();
}


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


/**
 * Function to check user answer
 */
function checkAnswer(userAnswer) {
    if (userAnswer == questions[currentQuestion].correct){
        showModal();
        IsCorrect();
        score++;
    } else {
        showModal();
        IsWrong();
    }  
}


/**
 * Function to render next question
 */
function nextQuestion() {
    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
        displayResults();
    }
}


/**
 * Function to display results
 */
function displayResults() {
    quizSection.style.display = 'none';
    resultsSection.style.display = 'block';
    let userScore = document.getElementById("user-score");
    userScore.innerHTML = score;
}


/* Learned how to create a Modal Box with CSS and JavaScript and adopted code from this W3Schools
(https://www.w3schools.com/howto/howto_css_modals.asp) tutorial */

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalFeedback.style.display = "none";
    nextQuestion();
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modalFeedback) {
        modalFeedback.style.display = "none";
        nextQuestion();
    }
  }


  function showModal() {
    modalFeedback.style.display = "block";
    let answerImg = document.getElementById("answer-img");
    answerImg.innerHTML = "<img src="+ questions[currentQuestion].questionImg +">";
    let keys = Object.keys(questions[currentQuestion]);
    keys.forEach((key) => {
        if (key == questions[currentQuestion].correct) {
            let correctAnswer= document.getElementById("correctAnswer");
            correctAnswer.innerHTML = questions[currentQuestion][key];
        }
    })
}

/**
 * Function to change the color of modal header and render message
 * when user's answer is correct.
 * Called when user's answer is checked against the correct answer.
 */
function IsCorrect() {

    let modalHeader = document.getElementsByClassName("modal-header")[0];
    modalHeader.style.backgroundColor = "#2B5F2B";

    let checkAnswerModal = document.getElementById("check-answer-modal");
    checkAnswerModal.innerHTML = "That is correct answer!";

    let modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = "This logo is for ";
}


/**
 * Function to change the color of modal header and render message
 * when user's answer is wrong.
 * Called when user's answer is checked against the correct answer.
 */
function IsWrong() {

    let modalHeader = document.getElementsByClassName("modal-header")[0];
    modalHeader.style.backgroundColor = "#A71B11";

    let checkAnswerModal = document.getElementById("check-answer-modal");
    checkAnswerModal.innerHTML = "Incorrect!";

    let modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = "Correct answer is ";
}


/**
 * Function to reset score, hides the results section content of the page and
 * takes user back to quiz area.
 * Called when restart button is clicked.
 */
function restartQuiz() {
    //reset current question index
    currentQuestion = 0;
    //reset score
    score = 0;
    resultsSection.style.display = 'none';
    startQuiz();
}


/**
 * Function to reset score and take user home section when restart button is clicked.
 */
function returnHome() {
    resultsSection.style.display = 'none';
    homeSection.style.display = 'block';
    //reset current question index
    currentQuestion = 0;
    //reset score
    score = 0;
}


/* Learned how to create dark and light themes using CSS variables and JavaScript and adopted the below code from this
(https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2) tutorial */

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();