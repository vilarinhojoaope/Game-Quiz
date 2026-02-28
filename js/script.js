const questions =[
    // {
    //     question: "Qual número tem 3 centenas, 5 dezenas e 2 unidades?",
    //     answer:[
    //         {id:"1", text:"352",correct:true,selected:0},
    //         {id:"2", text:"325",correct:false,selected:0},
    //         {id:"3", text:"512",correct:false,selected:0},
    //         {id:"4", text:"262",correct:false,selected:0},
    //     ],
    //     visited:false,
    // },
    // {
    //     question: "No número 478, o algarismo 7 representa:",
    //     answer:[
    //         {id:"1", text:"7 unidades",correct:false,selected:0},
    //         {id:"2", text:"7 cetenas",correct:false,selected:0},
    //         {id:"3", text:"78 dezenas",correct:false,selected:0},
    //         {id:"4", text:"7 dezenas",correct:true,selected:0},
    //     ],
    //     visited:false,
    // },
    // {
    //     question: "Quantas dezenas existem em 120?",
    //     answer:[
    //         {id:"1", text:"10",correct:false,selected:0},
    //         {id:"2", text:"12",correct:true,selected:0},
    //         {id:"3", text:"11",correct:false,selected:0},
    //         {id:"4", text:"2",correct:false,selected:0},
    //     ],
    //     visited:false,
    // },
    // {
    //     question: "Qual é o valor posicional do algarismo 4 no número 246?",
    //     answer:[
    //         {id:"1", text:"4",correct:false,selected:0},
    //         {id:"2", text:"40",correct:true,selected:0},
    //         {id:"3", text:"400",correct:false,selected:0},
    //         {id:"4", text:"24",correct:false,selected:0},
    //     ],
    //     visited:false,
    // },
    // {
    //     question: "Qual número é formado por 9 dezenas e 6 unidades?",
    //     answer:[
    //         {id:"1", text:"69",correct:false,selected:0},
    //         {id:"2", text:"90",correct:false,selected:0},
    //         {id:"3", text:"96",correct:true,selected:0},
    //         {id:"4", text:"196",correct:false,selected:0},
    //     ],
    //     visited:false,
    // }
    {
        question: "Qual é o resultado de 7 x 8?",
        answer:[
            {id:"1", text:"54", correct:false, selected:0},
            {id:"2", text:"56", correct:true, selected:0},
            {id:"3", text:"48", correct:false, selected:0},
            {id:"4", text:"64", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        answer:[
            {id:"1", text:"Terra", correct:false, selected:0},
            {id:"2", text:"Marte", correct:false, selected:0},
            {id:"3", text:"Júpiter", correct:true, selected:0},
            {id:"4", text:"Saturno", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o plural de 'cão'?",
        answer:[
            {id:"1", text:"cãos", correct:false, selected:0},
            {id:"2", text:"cães", correct:true, selected:0},
            {id:"3", text:"cãoses", correct:false, selected:0},
            {id:"4", text:"cões", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é a capital do Brasil?",
        answer:[
            {id:"1", text:"Rio de Janeiro", correct:false, selected:0},
            {id:"2", text:"São Paulo", correct:false, selected:0},
            {id:"3", text:"Brasília", correct:true, selected:0},
            {id:"4", text:"Salvador", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quantos lados tem um hexágono?",
        answer:[
            {id:"1", text:"5", correct:false, selected:0},
            {id:"2", text:"6", correct:true, selected:0},
            {id:"3", text:"7", correct:false, selected:0},
            {id:"4", text:"8", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o resultado de 100 ÷ 4?",
        answer:[
            {id:"1", text:"20", correct:false, selected:0},
            {id:"2", text:"25", correct:true, selected:0},
            {id:"3", text:"30", correct:false, selected:0},
            {id:"4", text:"40", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual destes é um mamífero?",
        answer:[
            {id:"1", text:"Cobra", correct:false, selected:0},
            {id:"2", text:"Golfinho", correct:true, selected:0},
            {id:"3", text:"Galinha", correct:false, selected:0},
            {id:"4", text:"Tartaruga", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o antônimo de 'rápido'?",
        answer:[
            {id:"1", text:"Veloz", correct:false, selected:0},
            {id:"2", text:"Ágil", correct:false, selected:0},
            {id:"3", text:"Devagar", correct:true, selected:0},
            {id:"4", text:"Breve", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quantos dias tem um ano bissexto?",
        answer:[
            {id:"1", text:"365", correct:false, selected:0},
            {id:"2", text:"366", correct:true, selected:0},
            {id:"3", text:"364", correct:false, selected:0},
            {id:"4", text:"360", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual instrumento mede a temperatura?",
        answer:[
            {id:"1", text:"Barômetro", correct:false, selected:0},
            {id:"2", text:"Termômetro", correct:true, selected:0},
            {id:"3", text:"Régua", correct:false, selected:0},
            {id:"4", text:"Bússola", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o resultado de 45 + 27?",
        answer:[
            {id:"1", text:"62", correct:false, selected:0},
            {id:"2", text:"72", correct:true, selected:0},
            {id:"3", text:"82", correct:false, selected:0},
            {id:"4", text:"70", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual destes é um estado físico da matéria?",
        answer:[
            {id:"1", text:"Energia", correct:false, selected:0},
            {id:"2", text:"Líquido", correct:true, selected:0},
            {id:"3", text:"Força", correct:false, selected:0},
            {id:"4", text:"Calor", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é a cor resultante da mistura de azul e amarelo?",
        answer:[
            {id:"1", text:"Verde", correct:true, selected:0},
            {id:"2", text:"Roxo", correct:false, selected:0},
            {id:"3", text:"Laranja", correct:false, selected:0},
            {id:"4", text:"Marrom", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Qual é o feminino de 'ator'?",
        answer:[
            {id:"1", text:"Atriz", correct:true, selected:0},
            {id:"2", text:"Atora", correct:false, selected:0},
            {id:"3", text:"Atressa", correct:false, selected:0},
            {id:"4", text:"Atrisa", correct:false, selected:0},
        ],
        visited:false,
    },
    {
        question: "Quantos continentes existem no planeta Terra?",
        answer:[
            {id:"1", text:"5", correct:false, selected:0},
            {id:"2", text:"6", correct:true, selected:0},
            {id:"3", text:"7", correct:false, selected:0},
            {id:"4", text:"8", correct:false, selected:0},
        ],
        visited:false,
    },
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
function addScore(){
        players.forEach(player => {
            console.log(buttonCurrent.dataset.id);
            if (player.id == buttonCurrent.dataset.id) {
                player.point++;
                buttonCurrent.innerHTML = `${player.name} | ${player.point}`;
            }
        });
        loadPlayers();
}
function checkAnswer(e){
    answers = questions[currentQuestionIndex].answer;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
    const selectedButton = e.target;

    const isCorrect = selectedButton.dataset.id == correctAnswer.id;  

    if(isCorrect){
        selectedButton.classList.add("correct");
        questions[currentQuestionIndex].answer[selectedButton.dataset.id-1].selected = 1;
        reloadQuestionState();  
        addScore();
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