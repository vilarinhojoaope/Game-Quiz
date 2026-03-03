const questionText = document.getElementById("quiz_question");
const quizAnswer = document.getElementById("quiz_answer");
const buttonBefore = document.getElementById("constrols_button_before");
const buttonNext = document.getElementById("constrols_button_next");

let dirControlButton = 1;


let currentQuestionIndex = 0;
let score = 0;

let visitedQuestions = [];
let visitedQuestionsCopy = [];

let maxQuestions = questions.length;
console.log(maxQuestions)


function defaultQuestions(){

    visitedQuestions = [];
    visitedQuestionsCopy = [];
    buttonBefore.classList.remove("enabled");
    if(questions.length > 1){
        buttonNext.classList.add("enabled");
    }else{
        buttonNext.classList.remove("enabled");

    }

    questions.forEach(question => {
        question.answer.forEach(answer => {
            answer.selected = 0;
        })
        question.visited = false;
    });
    currentQuestionIndex=0;
    showQuestion();
}

function randomIntMinMax(min, max) {

    let index = Math.floor(Math.random() * (max - min)) + min;
    // while(visitedQuestions.includes(index) == true){
    //     if(visitedQuestions.length < maxQuestions){
    //         index = Math.floor(Math.random() * (max - min)) + min;
    //     }else{
    //         return 0;
    //     }
    // }
    return index;
}

function start(){
    score = 0;
    currentQuestionIndex = randomIntMinMax(0,maxQuestions);
    visitedQuestions.push(currentQuestionIndex);
    visitedQuestionsCopy.push(currentQuestionIndex);

    console.log(currentQuestionIndex);

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
            // console.log(buttonCurrent.dataset.id);
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
/*next button*/
if(questions.length > 1){
    buttonNext.classList.add("enabled");
}
function handleBeforeButton(){
    buttonNext.disabled = false;
    buttonNext.classList.add("enabled");

    if(visitedQuestions.length > 1){
        visitedQuestions.pop();
        if(visitedQuestions.length == 1){
            buttonBefore.classList.remove("enabled");
        }
        currentQuestionIndex = visitedQuestions[visitedQuestions.length-1];
    }else if(visitedQuestions.length <= 1){
        buttonBefore.disabled = true;
        buttonBefore.classList.remove("enabled");
    }
    // console.log(currentQuestionIndex);
    showQuestion();
}
function handleNextButton(){
    
    currentQuestionIndex = randomIntMinMax(0,maxQuestions);

    while((visitedQuestionsCopy.includes(currentQuestionIndex) == true) && visitedQuestionsCopy.length < maxQuestions){
        currentQuestionIndex = randomIntMinMax(0,maxQuestions);
        console.log("Número de questões visitadas: ",visitedQuestionsCopy.length);

    }

    if(visitedQuestions.length >= maxQuestions){
        currentQuestionIndex = 0;
        buttonNext.disabled = true;
        buttonNext.classList.remove("enabled");
    
    }else{
        buttonNext.classList.add("enabled");
        visitedQuestions.push(currentQuestionIndex);
        visitedQuestionsCopy.push(currentQuestionIndex);
    }

    if(visitedQuestions.length > 1){
        buttonBefore.disabled = false;
        buttonBefore.classList.add("enabled");
    }

    showQuestion();
}
buttonBefore.addEventListener("click",()=>{

    handleBeforeButton();

});
buttonNext.addEventListener("click",()=>{

    handleNextButton();

});

start();