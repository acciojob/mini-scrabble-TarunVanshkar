//your code here
// let inputBox = document.getElementById("evaluatedText");
// let h3Tag = document.getElementById("letterCount");
// h3Tag.innerText = 0;
// function renderCount(){
//     h3Tag.innerText = inputBox.value.length + 1;
// }
// inputBox.addEventListener("keypress", renderCount);

let inputBox = document.getElementById("evaluatedText");
let h3Tag = document.getElementById("letterCount");
h3Tag.innerText = 0;
function renderCount() {
    let text = inputBox.value;
    // if(lastElement !== " ") {
    // h3Tag.innerText = inputBox.value.length + 1;
    const textArr = text.split("");
    let wordCount = 1;
  
    for (word of textArr) {
      if (/[a-zA-Z0-9]/.test(word)) {
        wordCount += 1;
      }
    }

    h3Tag.innerText = wordCount
}
inputBox.addEventListener("keypress", renderCount);