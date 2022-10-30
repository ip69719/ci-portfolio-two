// Create questions for the game

let questions = [
    {
        question: 'assets/images/peugeot-logo.png',
        answers: [
            {text: 'mercedes', correct: false},
            {text: 'peugeot', correct: true},
            {text: 'tesla', correct: false}
        ]
    },
    {
        question: 'assets/images/wiesmann-logo.png',
        answers: [
            {text: 'seat', correct: false},
            {text: 'honda', correct: false},
            {text: 'wiesmann', correct: true}
        ]
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