
const buttonCurrent = document.getElementById("selector_current");
const boxOption = document.querySelector(".selector_dropdown")

buttonCurrent.addEventListener("click", ()=>{
    boxOption.classList.toggle("actived");
});

players = [
    {id:0,name:"Carlos Eduardo",point:0},
    {id:1,name:"Marina Silva",point:0},
    {id:2,name:"Pedro Henrique",point:0},
    {id:3,name:"Juliana Costa",point:0},
    {id:4,name:"Lucas Oliveira",point:0},
    {id:5,name:"Fernanda Santos",point:0},
    {id:6,name:"Rafael Almeida",point:0},
    {id:7,name:"Camila Rodrigues",point:0},
    {id:8,name:"Gabriel Souza",point:0},
    {id:9,name:"Amanda Ferreira",point:0},
    {id:10,name:"Bruno Lima",point:0},
    {id:11,name:"Pedro Henrique",point:0},
    {id:12,name:"Zeca pagodinho",point:0},
    {id:13,name:"Leleu",point:0},
    {id:14,name:"Seu zé da pop 100 leão",point:0},
    {id:15,name:"Ekko",point:0},
];
function resetPlayers(){
    while(boxOption.firstChild){
        boxOption.removeChild(boxOption.firstChild);
    }
}
function releaseData(e){
    const selectedButton = e.target;
    let selectedIndex = selectedButton.dataset.id;
    buttonCurrent.dataset.id = selectedIndex;
    buttonCurrent.innerHTML = `${players[selectedIndex].name} | ${players[selectedIndex].point}`;
    boxOption.classList.toggle("actived");
}
function loadPlayers(){
    resetPlayers();
    players.forEach(player => {
        const button = document.createElement("button");
        button.innerHTML = `${player.name} | points: ${player.point}`;
        button.classList.add("selector_option");
        button.classList.add("slackey-regular");
        button.dataset.id = player.id;
        button.addEventListener("click",releaseData);
        boxOption.appendChild(button);
    });
}
function start(){
    loadPlayers();
}
start();