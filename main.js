//Rock Paper Scissors

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
    if (userOpt === 'Rock'){
        let botRandom = Math.random();

        if (botRandom > 3.3 ) {
            
        }
    }
 
}