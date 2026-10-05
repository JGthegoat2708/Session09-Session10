// Data extracted from Session 10 Quiz Content
const quizData = [
    {
        question: "1. What does a large language model predict?", //[cite: 44]
        options: ["The previous word", "The next token", "The grammatical structure", "The entire sentence"],
        answer: "The next token" //[cite: 44]
    },
    {
        question: "2. What comes before the colon in the course commit format?", //[cite: 44]
        options: ["The author name", "The file name", "The type, such as feat or fix", "The branch name"],
        answer: "The type, such as feat or fix" //[cite: 44]
    },
    {
        question: "3. What must a unit test do before the bug is fixed?", //[cite: 44]
        options: ["Fail", "Pass", "Be deleted", "Compile indefinitely"],
        answer: "Fail" //[cite: 44]
    },
    {
        question: "4. Where should webpage styling live?", //[cite: 44]
        options: ["Inside the HTML body", "In a JavaScript file", "In a separate CSS file", "In the database"],
        answer: "In a separate CSS file" //[cite: 44]
    },
    {
        question: "5. What does a loop inside another loop usually mean?", //[cite: 44]
        options: ["Linear time", "Quadratic time", "Constant time", "Logarithmic time"],
        answer: "Quadratic time" //[cite: 44]
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

// Renders the current question and options to the screen
function loadQuestion() {
    const container = document.getElementById('quiz-container');
    const currentQ = quizData[currentQuestionIndex];
    
    let html = `<h3>${currentQ.question}</h3><ul class="options">`;
    
    currentQ.options.forEach((option) => {
        // If the user previously selected an answer and goes back, keep it highlighted
        const isSelected = userAnswers[currentQuestionIndex] === option ? 'selected' : '';
        html += `
            <li>
                <button class="${isSelected}" onclick="selectOption(this, '${option}')">${option}</button>
            </li>`;
    });
    
    html += `</ul>`;
    
    // Determine which button to show (Next or Submit)
    const hasAnswered = userAnswers[currentQuestionIndex] !== undefined;
    
    if (currentQuestionIndex < quizData.length - 1) {
        html += `<button id="next-btn" class="action-btn" onclick="nextQuestion()" ${hasAnswered ? '' : 'disabled'}>Next Question</button>`;
    } else {
        html += `<button id="submit-btn" class="action-btn" onclick="showResults()" ${hasAnswered ? '' : 'disabled'}>Submit Quiz</button>`;
    }
    
    container.innerHTML = html;
}

// Handles selecting an option
window.selectOption = function(btnElement, selectedOption) {
    // Remove "selected" class from all buttons
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Add "selected" class to the clicked button
    btnElement.classList.add('selected');
    
    // Save the user's choice in the array (prevents the double-click bug)
    userAnswers[currentQuestionIndex] = selectedOption;
    
    // Enable the Next/Submit button
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    if (nextBtn) nextBtn.disabled = false;
    if (submitBtn) submitBtn.disabled = false;
};

// Moves to the next question
window.nextQuestion = function() {
    if (!userAnswers[currentQuestionIndex]) return; 
    currentQuestionIndex++;
    loadQuestion();
};

// Calculates the final score and displays the recap
window.showResults = function() {
    const container = document.getElementById('quiz-container');
    let score = 0;
    let resultsHTML = `<h2>Quiz Results</h2>`;
    
    quizData.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.answer;
        
        if (isCorrect) score++;

        resultsHTML += `
            <div class="result-item">
                <div class="result-question">${q.question}</div>
                <div>Your Answer: <span class="${isCorrect ? 'correct-text' : 'wrong-text'}">${userAnswer || "None"}</span> ${isCorrect ? '✅' : '❌'}</div>
                ${!isCorrect ? `<div>Correct Answer: <span class="correct-text">${q.answer}</span></div>` : ''}
            </div>
        `;
    });

    resultsHTML += `
        <div class="score-display">
            Final Score: ${score} out of 5
        </div>
        <button class="action-btn" style="width: 100%;" onclick="location.reload()">Restart Quiz</button>
    `;
    
    container.innerHTML = resultsHTML;
};

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});