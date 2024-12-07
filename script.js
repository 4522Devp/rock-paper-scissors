
let userScore = 0;
let computerScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCoputerChoice = () =>{
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText="Game was Draw, Play again";
    msg.style.backgroundColor ="#081b31";
};

const showWinner = (userWin,userChoice,computerChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win, ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor ="Green";
    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText =`you lose, ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) =>{
    const computerChoice= genCoputerChoice();

    if(userChoice === computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
           userWin = computerChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userWin = computerChoice ==="scissors" ? false:true;
        }else{
            computerChoice ==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});