//Rock Paper Scissors

//Output Message
 let outputMsgEl = document.getElementById("outputMsg");
let botOptEl = document.getElementById("botOpt").style.display = "none";
//Variables
let optRockEl = document.getElementById("optRock");
let optPaperEl = document.getElementById("optPaper");
let optScissorEl = document.getElementById("optScissor");


//Global Variables
let userOpt = 'Rock';

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
        console.log(botRandom);
        
        if (botRandom < 0.33 ) {
            console.log("rock");
            console.log("TIE");
        }
        else if (botRandom < 0.66 ) {
            console.log("paper");
            console.log("YOU LOSE");

        }
        else {
            console.log("scissors");
            console.log("YOU WIN");
        }
    }
    //Select PAPER
    if (userOpt === 'Paper') {
        let botRandom = Math.random();
        console.log(botRandom);
        
        if (botRandom < 0.33 ) {
            console.log("rock");
            console.log("YOU WIN");
        }
        else if (botRandom < 0.66 ) {
            console.log("paper");
            console.log("TIE");

        }
        else {
            console.log("scissors");
            console.log("YOU LOSE");
        }
    }
    //Select Scissors
    if (userOpt === 'Scissors') {
        let botRandom = Math.random();
        console.log(botRandom);
        
        if (botRandom < 0.33 ) {
            console.log("rock");
            console.log("YOU LOSE");
        }
        else if (botRandom < 0.66 ) {
            console.log("paper");
            console.log("YOU WIN");

        }
        else {
            console.log("scissors");
            console.log("TIE");
        }
    }

 
}