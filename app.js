/* Basketball RPS */


/* Set up Global variables for future use*/

// const shotClock = 24;
let playerScore = 0;
// let playerElementScore = document.getElementById('player-score');
let opponentScore = 0;
// let opponentElementScore = document.getElementById('opponent-score');

let moveSet = ["Shoot", "Pass", "Block"] 
let choiceGenerator = Math.floor(Math.random()*3);
let opponentChoice = moveSet[choiceGenerator];
// let player = {
//     firstChoice: "Shoot",
//     secondChoice: "Pass",
//     thirdChoice: "Block"
// }


//Compare player decision and oppenent decision
//win conditions
function game(playerChoice){
    if(playerChoice == "Shoot" && opponentChoice == "Pass" || playerChoice == "Pass" && opponentChoice == "Block" || playerChoice == "Block" && opponentChoice == "Shoot"){
        console.log("Win!")
        document.getElementById('playerClick').innerText = `You Win! You chose ${playerChoice} and opponent chose ${opponentChoice}`
        playerScore++;
    } else if()
}


