const resultBox = document.querySelector(".result_container");
const finishButton = document.querySelector(".btn-finish");
const finishBackButton = document.getElementById("btn-result-back");

const resultPlayers = document.querySelector(".result_players");

finishButton.addEventListener("click",()=>{
    // resultBox.style.display = 'flex';
    resultBox.classList.add("activedIn");
    resultBox.classList.remove("activedOut");
});
finishButton.addEventListener("click",showRank);

finishBackButton.addEventListener("click",()=>{
    resultBox.classList.remove("activedIn");
    resultBox.classList.add("activedOut");
    // setTimeout(() => {
    //     resultBox.style.display = 'none';
    // }, 200);
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
let srcList = ["../src/icons/primeiro-lugar.png","../src/icons/segundo-lugar.png","../src/icons/terceiro-lugar.png"];



function showRank(){
    const ranking = getTopScore(3);
    resetResult();
   
    for(let i=0; i<3; i++){
        const button = document.createElement("div");
        // button.innerHTML = `${ranking[i].name} : ${ranking[i].point} pontos`;
        button.classList.add("result_player");
        button.classList.add("slackey-regular");

        const img = document.createElement("img");
        img.src = srcList[i];
        img.classList.add("ranking-icon");
    
        const text = document.createElement("span");
        text.textContent = ranking[i].name;

        button.dataset.id = i;
        button.addEventListener("mouseenter",()=>{
            text.textContent = `${ranking[i].point} pontos`;
            button.classList.add("actived");
        });
        button.addEventListener("mouseleave",()=>{
            text.textContent = ranking[i].name;
            button.classList.remove("actived");
        });
        button.appendChild(img);
        button.appendChild(text); 
        resultPlayers.appendChild(button);
        
    }
    
}
// function showRank(){
//     const ranking = getTopScore(3);
//     resetResult();
   
//     for(let i=0; i<3; i++){
//         const button = document.createElement("div");
//         button.classList.add("result_player","slackey-regular");

//         const img = document.createElement("img");
//         img.src = srcList[i];
//         img.classList.add("ranking-icon");

//         const text = document.createElement("span");
//         text.textContent = ranking[i].name;

//         button.dataset.id = i;

//         button.addEventListener("mouseenter",(e)=>{
//             text.textContent = `${ranking[i].point} pontos`;
//             button.classList.add("actived");
//         });

//         button.addEventListener("mouseleave",(e)=>{
//             text.textContent = ranking[i].name;
//             button.classList.remove("actived");
//         });

//         button.appendChild(img);
//         button.appendChild(text);
//         resultPlayers.appendChild(button);
//     }
// }
