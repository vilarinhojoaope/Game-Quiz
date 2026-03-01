
function defaultQuestions(){
    questions.forEach(question => {
        question.answer.forEach(answer => {
            answer.selected = 0;
            console.log("resetado");
        })
        question.visited = false;
    });
    currentQuestionIndex=0;
    showQuestion();
}

const questionText = document.getElementById("quiz_question");
const quizAnswer = document.getElementById("quiz_answer");
const buttonBefore = document.getElementById("constrols_button_before");
const buttonNext = document.getElementById("constrols_button_next");
let dirControlButton = 1;


let currentQuestionIndex = 0;
let score = 0;

function randomIntMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

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
    currentQuestionIndex = randomIntMinMax(0,29);
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