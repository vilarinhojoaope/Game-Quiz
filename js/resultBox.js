const resultBox = document.querySelector(".result_container");
const finishButton = document.querySelector(".btn-finish");
const finishBackButton = document.getElementById("btn-result-back");

const resultPlayers = document.querySelector(".result_players");

finishButton.addEventListener("click",()=>{
    resultBox.style.display = 'flex';
    resultBox.classList.add("activedIn");
    resultBox.classList.remove("activedOut");
});
finishButton.addEventListener("click",showRank);

finishBackButton.addEventListener("click",()=>{
    resultBox.classList.remove("activedIn");
    resultBox.classList.add("activedOut");
    setTimeout(() => {
        resultBox.style.display = 'none';
    }, 200);
    defaultQuestions();
    defaultPlayer();
});

let points = [];
const topRank = [];


function getTopScore(n){
    const ranking = [];
    let copyPlayers = [...players];

    let points = copyPlayers.map(player => player.point);

    for(let i =0; i<n; i++){
        let max = Math.max(...points);
        let maxIndex = points.indexOf(max);

        ranking.push({name:copyPlayers[maxIndex].name,point:copyPlayers[maxIndex].point});
        points[maxIndex] = -1;
    }
    ranking.forEach(current => {
        console.log("name: ",current.name," point: ",current.point);
    })
    return ranking;

}

function resetResult(){

    while(resultPlayers.firstChild){
        resultPlayers.removeChild(resultPlayers.firstChild);
    }

}
function showRank(){
    const ranking = getTopScore(3);
    resetResult();
   
    for(let i=0; i<3; i++){
        const button = document.createElement("button");
        button.innerHTML = `${ranking[i].name} : ${ranking[i].point} pontos`;
        button.classList.add("result_player");
        button.classList.add("slackey-regular");
        resultPlayers.appendChild(button);
    }
    
}
