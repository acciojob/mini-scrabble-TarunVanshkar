//your code here
let inputBox = document.getElementById("evaluatedText");
let h3Tag = document.getElementById("letterCount");
h3Tag.innerText = 0;
function renderCount(){
    h3Tag.innerText = inputBox.value.length + 1;
}
inputBox.addEventListener("keypress", renderCount);