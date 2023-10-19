const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merriweather = document.getElementById("js--merriweather");
const input = document.getElementById("js--input");
const toggle = document.getElementById("toggle");
const header = document.getElementsByClassName("header")[0]
const showCase = document.getElementsByClassName("showCase")[0];
const showCaseInput = document.getElementsByClassName("showCase__input")[0];
const showCaseFont = document.getElementsByClassName("showCase__font");
const showCaseOutput = document.getElementsByClassName("showCase__output");
const hearts = document.getElementsByClassName("heart");

toggle.onchange = function(){
  if(toggle.checked === true){
    header.style.background = "#222831";
    showCase.style.background = "#222831";
    showCaseInput.style.borderBottom = "0.2rem solid #F4EEE0";
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].children[0].style.color = "#F4EEE0";
    }
    for (let i = 0; i < showCaseFont.length; i++) {
      showCaseFont[i].style.color = "#F4EEE0";
    }
    for (let i = 0; i < showCaseOutput.length; i++) {
      showCaseOutput[i].style.color = "#F4EEE0";
    }
  }
  else {
    header.style.background = "#F4EEE0";
    showCase.style.background = "#F4EEE0";
    showCaseInput.style.borderBottom = "0.2rem solid #222831";
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].children[0].style.color = "#222831";
    }
    for (let i = 0; i < showCaseFont.length; i++) {
      showCaseFont[i].style.color = "#222831";
    }
    for (let i = 0; i < showCaseOutput.length; i++) {
      showCaseOutput[i].style.color = "#222831";
    }
      root.style.setProperty("--background-color", "#F4EEE0");
      root.style.setProperty("--font-color", "#222831");
      root.style.setProperty("--border", "#222831");
      return;
  }
}

input.oninput = function(event){
  dancing.innerText = event.target.value;
  lato.innerText = event.target.value;
  merriweather.innerText = event.target.value;
}

for (let i = 0; i < hearts.length; i++){
  hearts[i].onclick = function(){
    for (let i = 0; i < hearts.length; i++){
      hearts[i].children[0].classList = "fa-regular fa-heart heart__logo"
    }
    hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
  }
}
