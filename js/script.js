const questions =[
    {
        question: "question 1?",
        answer:[
            {id:"1", text:"uma",correct:true},
            {id:"2", text:"duas",correct:false},
            {id:"3", text:"tres",correct:false},
            {id:"4", text:"quatro",correct:false},
        ],
    },
    {
        question: "question 2?",
        answer:[
            {id:"1", text:"Aquarela",correct:true},
            {id:"2", text:"Óleo",correct:false},
            {id:"3", text:"Têmpera",correct:false},
            {id:"4", text:"Guache",correct:false},
        ],
    },
    {
        question: "question 3?",
        answer:[
            {id:"1", text:"Aquarela",correct:true},
            {id:"2", text:"Óleo",correct:false},
            {id:"3", text:"Têmpera",correct:false},
            {id:"4", text:"Guache",correct:false},
        ],
    },
];

const questionText = document.getElementById("quiz_question");
const quizAnswer = document.getElementById("quiz_answer");
const buttonBefore = document.getElementById("constrols_button_before");
const buttonNext = document.getElementById("constrols_button_next");

let currentQuestionIndex = 0;
let score = 0;

function start(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}
function resetState(){
    while(quizAnswer.firstChild){
        quizAnswer.removeChild(quizAnswer.firstChild);
    }
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;
    currentQuestion.answer.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        button.dataset.id = answer.id;
        button.classList.add("slackey-regular");
        button.addEventListener("click",checkAnswer);

        quizAnswer.appendChild(button);
    });
}
function checkAnswer(e){
    answers = questions[currentQuestionIndex].answer;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.id == correctAnswer.id;
    
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect");
    }

    Array.from(quizAnswer.children).forEach((button) => {
        button.disabled = true;
        setTimeout(()=>{
            button.classList.add("buttonDisabled");
        },500)
    });
}


start();