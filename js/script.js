const questions =[
    {
        question: "Qual número tem 3 centenas, 5 dezenas e 2 unidades?",
        answer:[
            {id:"1", text:"352",correct:true,selected:0},
            {id:"2", text:"325",correct:false,selected:0},
            {id:"3", text:"512",correct:false,selected:0},
            {id:"4", text:"262",correct:false,selected:0},
        ],
        visited:false,
    },
    {
        question: "No número 478, o algarismo 7 representa:",
        answer:[
            {id:"1", text:"7 unidades",correct:false,selected:0},
            {id:"2", text:"7 cetenas",correct:false,selected:0},
            {id:"3", text:"78 dezenas",correct:false,selected:0},
            {id:"4", text:"7 dezenas",correct:true,selected:0},
        ],
        visited:false,
    },
    {
        question: "Quantas dezenas existem em 120?",
        answer:[
            {id:"1", text:"10",correct:false,selected:0},
            {id:"2", text:"12",correct:true,selected:0},
            {id:"3", text:"11",correct:false,selected:0},
            {id:"4", text:"2",correct:false,selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o valor posicional do algarismo 4 no número 246?",
        answer:[
            {id:"1", text:"4",correct:false,selected:0},
            {id:"2", text:"40",correct:true,selected:0},
            {id:"3", text:"400",correct:false,selected:0},
            {id:"4", text:"24",correct:false,selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual número é formado por 9 dezenas e 6 unidades?",
        answer:[
            {id:"1", text:"69",correct:false,selected:0},
            {id:"2", text:"90",correct:false,selected:0},
            {id:"3", text:"96",correct:true,selected:0},
            {id:"4", text:"196",correct:false,selected:0},
        ],
        visited:false,
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

    currentQuestion.answer.forEach((answer)=>{

        const button = document.createElement("button");
        button.innerHTML = answer.text;

        button.classList.add("btn");

        button.dataset.id = answer.id;
        button.classList.add("slackey-regular");

        button.addEventListener("click",checkAnswer);
        quizAnswer.appendChild(button);

        let currentButton = document.querySelector(`.btn[data-id="${answer.id}"]`);

        if(answer.selected == 1){
            currentButton.classList.add("correct");
        }else if(answer.selected == 2){
            currentButton.classList.add("incorrect");
        }
    });

    if(currentQuestion.visited == true){
        Array.from(quizAnswer.children).forEach((button) => {
            button.disabled = true;
        })
    }

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
        questions[currentQuestionIndex].answer[selectedButton.dataset.id-1].selected = 1;
        reloadQuestionState();  
        score++;
    }else{
        selectedButton.classList.add("incorrect");

        questions[currentQuestionIndex].answer[selectedButton.dataset.id-1].selected = 2;
        reloadQuestionState(); 
    
    }
    // questions[currentQuestionIndex].answer[selectedButton.dataset.id].selected = true;

    Array.from(quizAnswer.children).forEach((button) => {
        button.disabled = true;
        setTimeout(()=>{
            button.classList.add("buttonDisabled");
        },500)
    });
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