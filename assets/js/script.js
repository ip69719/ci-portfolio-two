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


/**
 * Function to render question
 */
function displayQuestion() {
    // display car logo image
    let questionImg = document.getElementById('question-img');
    questionImg.innerHTML = "<img src='assets/images/peugeot-logo.png'>";
}

displayQuestion()