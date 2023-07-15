const questions = [
    {
        question: "Which two countries have not missed one of the modern-day Olympics?",
        answers: [ 
            { text: "Germany and England", correct: false },
            { text: "USA and France", correct: false },
            { text: "Greece and Australia", correct: true },
            { text: "China and Switzerland", correct: false }
        ]
    },
    {
        question: "Which is the only American Football team to go a whole season undefeated, including the Super Bowl?",
        answers: [ 
            { text: "The Miami Dolphins", correct: true },
            { text: "New England Patriots", correct: false },
            { text: "Kansas City Chiefs", correct: false },
            { text: "Minnesota Vikings", correct: false }
        ]
    },
    {
        question: "Who has won more tennis grand slam titles, Venus Williams or Serena Williams?",
        answers: [ 
            // { text: "The Miami Dolphins(1972)", correct: true };
            // { text: "New England Patriots", correct: false };
            { text: "Venus Williams", correct: false },
            { text: "Serena Williams", correct: true }
        ]
    },
    {
        question: "Which basketball team has completed two threepeats?",
        answers: [ 
            { text: "Los Angeles Lakers", correct: false },
            { text: "Boston Celtics", correct: false },
            { text: "Chicago Bulls", correct: true },
            { text: "San Antonio Spurs", correct: false }
        ]
    },
    {
    question: "Which Former NBA Player Was Nicknamed “Agent Zero”?",
    answers: [ 
        { text: "Stephen Curry", correct: false },
        { text: "James Harden", correct: false },
        { text: "Gilber Arenas", correct: true },
        { text: "Anthony Davis", correct: false }
    ]
},
{
    question: 'What sport is dubbed the "king of sports"?',
    answers: [ 
        { text: "Soccer", correct: true },
        { text: "Boxing", correct: false },
        { text: "Tennis", correct: false },
        { text: "American Football", correct: false }
    ]
},
{
    question: "What is the name of the professional ice hockey team based in Toronto, Canada?",
    answers: [ 
        { text: "Toronto Oilers", correct: false },
        { text: "Toronto Canucks", correct: false },
        { text: "Toronto Jets", correct: false },
        { text: "Toronto Maple Leafs", correct: true }
    ]
},
{
    question: "Who was the first gymnast to score a perfect 10 score?",
    answers: [ 
        { text: "Bruce Jenner", correct: false },
        { text: "Nadia Comaneci", correct: true },
        { text: "Nikolai Andrianov", correct: false },
        { text: "Michael Phelps", correct: false }
    ]
},
{
    question:"Dump, floater, and wipe are terms used in which team sport",
        answers: [ 
            { text: "Badminton", correct: false },
            { text: "Table Tennis", correct: false },
            { text: "Volleyball", correct: true },
            { text: "Water Polo", correct: false }
        ]
    },
    {
        question: "Who was the first female driver to score points in a Grand Prix?",
        answers: [ 
            { text: "Lella Lombardi (1975 Grand Prix)", correct: true },
            { text: "Maria Teresa de Filippis (1958 Grand Prix)", correct: false }
            // { text: "Lella Lombardi (1975 Grand Prix)", correct: false },
            // { text: "Lella Lombardi (1975 Grand Prix)", correct: false }
        ]
    },
    {
        question: "How many points did Michael Jordan score on his first NBA game?",
        answers: [ 
            { text: "16", correct: true },
            { text: "18", correct: false },
            { text: "10", correct: false },
            { text: "24", correct: false }
        ]
    },
    {
        question: "What is Earth's largest continent?",
        answers: [ 
            { text: "Oceania", correct: false },
            { text: "Antarctica", correct: false },
            { text: "Asia", correct: true },
            { text: "North America", correct: false }
        ]
    },
    {
    question: "What's the smallest country in the world?",
    answers: [ 
        { text: "San Marino", correct: false },
        { text: "Liechtenstein", correct: false },
        { text: "Vatican City", correct: true },
        { text: "Monaco", correct: false }
    ]
},
{
    question: 'What country touches the Indian Ocean, the Arabian Sea, and the Bay of Bengal?',
    answers: [ 
        { text: "India", correct: true },
        { text: "Pakistan", correct: false },
        { text: "Bangladesh", correct: false },
        { text: "Iran", correct: false }
    ]
},
{
    question: "Area 51 is located in which U S state?",
    answers: [ 
        { text: "Montana", correct: false },
        { text: "Colorado", correct: false },
        { text: "Arizona", correct: false },
        { text: "Nevada", correct: true }
    ]
},
{
    question: "What is the city with the most diversity in terms of language?",
    answers: [ 
        { text: "Los Angeles", correct: false },
        { text: "New York City", correct: true },
        { text: "Jersey City", correct: false },
        { text: "Miami", correct: false }
    ]
},
{
    question: "The ancient Phoenician city of Constantine is located in what modern-day Arab countryy?",
        answers: [ 
            // { text: "The Miami Dolphins(1972)", correct: true };
            // { text: "New England Patriots", correct: false };
            { text: "Iraq", correct: false },
            { text: "Algeria", correct: true }
        ]
    },
    {
        question: "Which country borders 14 nations and crosses 8 time zones?",
        answers: [ 
            { text: "China", correct: false },
            { text: "Greenland", correct: false },
            { text: "Russia", correct: true },
            { text: "Australia", correct: false }
        ]
    },
    {
    question: "Havana is the capital of what country?",
    answers: [ 
        { text: "The Bahamas", correct: false },
        { text: "Cayman Islands", correct: false },
        { text: "Cuba", correct: true },
        { text: "Haiti", correct: false }
    ]
},
{
    question: 'What country has the most natural lakes?',
    answers: [ 
        { text: "Canada", correct: true },
        { text: "USA", correct: false },
        { text: "Brazil", correct: false },
        { text: "Russia", correct: false }
    ]
},
{
    question: "Riyadh is the capital of this Middle-Eastern country.",
    answers: [ 
        { text: "Bahrain", correct: false },
        { text: "Kuwait", correct: false },
        { text: "Qatar", correct: false },
        { text: "The Kingdom of Saudi Arabia", correct: true }
    ]
},
{
    question: 'Which Central American country has a name which translates to English as “The Saviour”?',
    answers: [ 
        { text: "Guatemala", correct: false },
        { text: "El Salvador", correct: true },
        { text: "Nicaragua", correct: false },
        { text: "Mexico", correct: false }
    ]
},
{
    question:"In what country would you find Lake Bled?",
        answers: [ 
            { text: "Scotland", correct: false },
            { text: "Austria", correct: false },
            { text: "Slovenia", correct: true },
            { text: "Croatia", correct: false }
        ]
    },
    {
        question: "What is the loudest animal on Earth?",
        answers: [ 
            { text: "Sperm Whale", correct: true },
            { text: "Elephant", correct: false }
            // { text: "Lella Lombardi (1975 Grand Prix)", correct: false },
            // { text: "Lella Lombardi (1975 Grand Prix)", correct: false }
        ]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [ 
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "The unicorn is the national animal of which country?",
        answers: [ 
            { text: "Denmark", correct: false },
            { text: "Belgium", correct: false },
            { text: "Scotland", correct: true },
            { text: "Luxembourg", correct: false }
        ]
    },
    {
    question: "How many legs does a spider have?",
    answers: [ 
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: true },
        { text: "10", correct: false }
    ]
},
{
    question: 'A group of ravens is known as?',
    answers: [ 
        { text: "Unkindness", correct: true },
        { text: "Death", correct: false },
        { text: "Evil", correct: false },
        { text: "Bad Fortune", correct: false }
    ]
},
{
    question: "How long do elephant pregnancies last?",
    answers: [ 
        { text: "14 months", correct: false },
        { text: "18 months", correct: false },
        { text: "28 months", correct: false },
        { text: "22 months", correct: true }
    ]
},
{
    question: 'The name of which African animal means "river horse"?',
    answers: [ 
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: true },
        { text: "Nile Crocodile", correct: false },
        { text: "Rhinoceros", correct: false }
    ]
}
];
gi
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;  
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
}else{
    selectedBtn.classList.add("incorrect");
    }

Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});

nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        checkResult();
    }
}


function checkResult() {
    const percentageCorrect = (score / questions.length) * 100;
    if (percentageCorrect >=80) {
        questionElement.innerHTML = "You Won. You scored at least 80% or more of the questions correct.";
    } else {
        questionElement.innerHTML = "You Lost. You got less than 80% of the questions correct.";
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz()
    }
});


startQuiz()
