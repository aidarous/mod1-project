/* Basketball RPS */


/* Set up Global variables for future use*/

// const shotClock = 24;
let playerScore = 0;
let displayPlayerScore = document.getElementById('player-score');
let opponentScore = 0;
let displayOpponentScore = document.getElementById('opponent-score');
let opponentChoice = () =>{
    let moveSet = ["Shoot", "Pass", "Block"] 
    let choiceGenerator = Math.floor(Math.random()*3);
    return moveSet[choiceGenerator];
}
let opponentDecision = opponentChoice()

// Compare player decision and oppenent decision
// Score conditions
function game(playerChoice){
    if(playerChoice === "Shoot" && opponentDecision === "Pass" || playerChoice === "Pass" && opponentDecision === "Block" || playerChoice === "Block" && opponentDecision === "Shoot"){
        console.log("Win!")
        let win = document.getElementById('playerClick')
        win.innerText = `Well done! You chose ${playerChoice} and opponent chose ${opponentDecision}`
        playerScore++;
        displayPlayerScore.innerHTML = `${playerScore}`
    } else if(opponentDecision === "Shoot" && playerChoice === "Pass" || opponentDecision === "Pass" && playerChoice === "Block" || opponentDecision === "Block" && playerChoice === "Shoot"){
        document.getElementById('PlayerClick')
        lose.innerText = `Touch luck! You chose ${playerChoice}and opponent chose ${opponentDecision}`
        opponentScore++;
    } else if(playerChoice === opponentScore){
        document.getElementById('PlayerClick').innerText = `You chose ${playerChoice} and opponent chose ${opponentDecision}! Its a draw!`
    }
}


