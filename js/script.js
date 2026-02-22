const questions =[
    {
        question: "question 1?",
        answer:[
            {id:"1", text:"uma",correct:true,selected:false},
            {id:"2", text:"duas",correct:false,selected:false},
            {id:"3", text:"tres",correct:false,selected:false},
            {id:"4", text:"quatro",correct:false,selected:false},
        ],
        visited:false
    },
    {
        question: "question 2?",
        answer:[
            {id:"1", text:"Aquarela",correct:true,selected:false},
            {id:"2", text:"Óleo",correct:false,selected:false},
            {id:"3", text:"Têmpera",correct:false,selected:false},
            {id:"4", text:"Guache",correct:false,selected:false},
        ],
        visited:false
    },
    {
        question: "question 3?",
        answer:[
            {id:"1", text:"Aquarela",correct:false,selected:false},
            {id:"2", text:"Óleo",correct:false,selected:false},
            {id:"3", text:"Têmpera",correct:false,selected:false},
            {id:"4", text:"Guache",correct:true,selected:false},
        ],
        visited:false
    }
];

const questionText = document.getElementById("quiz_question");
const quizAnswer = document.getElementById("quiz_answer");
const buttonBefore = document.getElementById("constrols_button_before");
const buttonNext = document.getElementById("constrols_button_next");
let dirControlButton = 1;


let currentQuestionIndex = 0;
let score = 0;

function start(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}
function resetState(){
    quizAnswer.classList.remove("visited");
    while(quizAnswer.firstChild){
        quizAnswer.removeChild(quizAnswer.firstChild);
    }
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;

    if(currentQuestion.visited == true && currentQuestion.visited == true){
        // quizAnswer.classList.add("visited");
    }

    currentQuestion.answer.forEach((answer)=>{

        const button = document.createElement("button");
        button.innerHTML = answer.text;

        // if(answer.selected == true ){
        //     currentButton = document.querySelector(`.btn[data-id="${answer.id}"]`);
        //     currentButton.classList.add("correct");
        // }else if(answer.selected == false){
        //     currentButton = document.querySelector(`.btn[data-id="${answer.id}"]`);
        //     currentButton.classList.add("correct"); 
        // }

        button.classList.add("btn");

        button.dataset.id = answer.id;
        button.classList.add("slackey-regular");

        button.addEventListener("click",checkAnswer);
        quizAnswer.appendChild(button);

        if(answer.selected == true){
            currentButton = document.querySelector(`.btn[data-id="${answer.id}"]`);
            currentButton.classList.add("correct");
        }

    });

}
function reloadQuestionState(){
    if(currentQuestionIndex >= 0){
        questions[currentQuestionIndex].visited = true;
    }
}
function checkAnswer(e){
    answers = questions[currentQuestionIndex].answer;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
    const selectedButton = e.target;

    const isCorrect = selectedButton.dataset.id == correctAnswer.id;  

    /*O PROBLEMA ESTAVA AQUI*/ 
    if(isCorrect){
        selectedButton.classList.add("correct");
        questions[currentQuestionIndex].answer[selectedButton.dataset.id-1].selected = true;
        score++;
    }
    // questions[currentQuestionIndex].answer[selectedButton.dataset.id].selected = true;

    Array.from(quizAnswer.children).forEach((button) => {
        button.disabled = true;
        setTimeout(()=>{
            button.classList.add("buttonDisabled");
        },500)
    });
    reloadQuestionState(); 
}

function handleBeforeButton(){
    currentQuestionIndex-=1;

    if(currentQuestionIndex >= 0){
        showQuestion();
    }else{
        currentQuestionIndex = 0;
    }
}
function handleNextButton(){
    currentQuestionIndex+=1;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        currentQuestionIndex = questions.length-1;
        showQuestion();
    }
}
buttonBefore.addEventListener("click",()=>{

    handleBeforeButton();

});
buttonNext.addEventListener("click",()=>{

    handleNextButton();

});

start();