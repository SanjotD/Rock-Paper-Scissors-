//Rock Paper Scissors

//Output Message
 let outputMsgEl = document.getElementById("outputMsg");

//Variables
let optRockEl = document.getElementById("optRock");
let optPaperEl = document.getElementById("optPaper");
let optScissorEl = document.getElementById("optScissor");


//Global Variables
let userOpt = 'Rock';
let winCountEl = 0;

// Event Functions
optRockEl.addEventListener("click", chooseRock);
optPaperEl.addEventListener("click", choosePaper);
optScissorEl.addEventListener("click", chooseScissor);

//Play Game
document.getElementById("startGamebtn").addEventListener("click", playGame);

//Functions 
function chooseRock() {
    //Highlighted Border 

    optRockEl.classList.add('active');
    optPaperEl.classList.remove('active');
    optScissorEl.classList.remove('active');

// Selection Option
    userOpt = 'Rock';
}

function choosePaper() {
    //Highlighted Border 

    optRockEl.classList.remove('active');
    optPaperEl.classList.add('active');
    optScissorEl.classList.remove('active');

// Selection Option
    userOpt = 'Paper';
}

function chooseScissor() {
    //Highlighted Border 

    optRockEl.classList.remove('active');
    optPaperEl.classList.remove('active');
    optScissorEl.classList.add('active');

// Selection Option
    userOpt = 'Scissors';
}

function playGame() {


    console.log("start");

    //Select ROCK
    if (userOpt === 'Rock'){
        let botRandom = Math.random();
        
        if (botRandom < 0.33 ) {
            outputMsgEl.innerHTML="THE BOT CHOSE ROCK, IT'S A TIE!"
        }
        else if (botRandom < 0.66 ) {
            outputMsgEl.innerHTML="THE BOT CHOSE PAPER, YOU LOSE!"
        }
        else {
            outputMsgEl.innerHTML="THE BOT CHOSE SCISSORS, YOU WIN!"
            winCountEl++;
        }
    }

    //Select PAPER
    if (userOpt === 'Paper') {
        let botRandom = Math.random();
        
        if (botRandom < 0.33 ) {
            outputMsgEl.innerHTML="THE BOT CHOSE ROCK, YOU WIN!"
            winCountEl++;
        }
        else if (botRandom < 0.66 ) {
            outputMsgEl.innerHTML="THE BOT CHOSE PAPER, IT'S A TIE!"
        }
        else {
            outputMsgEl.innerHTML="THE BOT CHOSE SCISSORS, YOU LOSE!"
        }
    }

    //Select Scissors
    if (userOpt === 'Scissors') {
        let botRandom = Math.random();
        
        if (botRandom < 0.33 ) {
            outputMsgEl.innerHTML="THE BOT CHOSE ROCK, YOU LOSE!"
        }
        else if (botRandom < 0.66 ) {
            outputMsgEl.innerHTML="THE BOT CHOSE PAPER, YOU WIN!"
            winCountEl++;
        }
        else {
            outputMsgEl.innerHTML="THE BOT CHOSE SCISSORS, IT'S A TIE!"
        }
    }
//Output Message
    document.getElementById("winsCount").innerHTML = winCountEl;
}