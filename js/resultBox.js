const resultBox = document.querySelector(".result_container");
const finishButton = document.querySelector(".btn-finish");
const finishBackButton = document.getElementById("btn-result-back");

finishButton.addEventListener("click",()=>{
    resultBox.style.display = 'flex';
    resultBox.classList.add("activedIn");
    resultBox.classList.remove("activedOut");
});
finishBackButton.addEventListener("click",()=>{
    resultBox.classList.remove("activedIn");
    resultBox.classList.add("activedOut");

    setTimeout(() => {
        resultBox.style.display = 'none';
    }, 200);
});