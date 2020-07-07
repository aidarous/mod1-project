/* Basketball RPS */

// Pseudo code
// 1. create score limit to win
// 2. set up conditions from basketball logicto decide a turn (shoot beats pass, pass beats block, block beats shot)
// 3. create choices for opponent and randomize them
// 4. create option to quit game
// 5. 
// Get the modal
var modal = document.getElementById("modal-container");
var btn = document.getElementById("modal-button");
var span = document.getElementsByClassName("close")[0];

// opens modal
btn.onclick = function() {
  modal.style.display = "block";
}
// closes the modal from the x
span.onclick = function() {
  modal.style.display = "none";
}
// closes modal from anywhere on screen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Set up Global variables and functions for future use*/

let playerScore = 0;
let displayPlayerScore = document.getElementById('player-score');
let opponentScore = 0;
let displayOpponentScore = document.getElementById('opponent-score');

let moveSet = ["Shoot", "Pass", "Block"] 
let choiceGenerator = Math.floor(Math.random()*3);
let opponentChoice = moveSet[choiceGenerator];



let gameOver = () => {
    /* Resets game when player wins or loses */
    if(playerScore == 16){
        alert("YOU WIN!!")
        opponentScore = 0;
        displayOpponentScore.innerHTML = `${opponentScore}`
        playerScore = 0;
        displayPlayerScore.innerHTML = `${playerScore}`
        document.getElementById('playerClick').innerHTML = ""
    } else if(opponentScore == 16){
        alert("YOU LOSE")
        opponentScore = 0;
        displayOpponentScore.innerHTML = `${opponentScore}`
        playerScore = 0;
        displayPlayerScore.innerHTML = `${playerScore}`
        document.getElementById('playerClick').innerHTML = ""
    }

}
// resets scoreboard to start a new game
let restartGame = () =>{
    alert("You have restarted the game")
    opponentScore = 0;
    displayOpponentScore.innerHTML = `${opponentScore}`
    playerScore = 0;
    displayPlayerScore.innerHTML = `${playerScore}`
    document.getElementById('playerClick').innerHTML = ""
}
// ensures opponent choice gets randomized every turn
let resetOpponentDecision = () => {
    choiceGenerator = Math.floor(Math.random()*3);
    opponentChoice = moveSet[choiceGenerator];
}

// The bulk of where the game takes place
// first player to 16 points wins like a pickup basketball game
function game(playerChoice){
    if(playerScore <= 16 || opponentScore <= 16){ // tried to use while loop but froze the browser 
        if(playerChoice === "Shoot" && opponentChoice === "Pass" || playerChoice === "Pass" && opponentChoice === "Block" || playerChoice === "Block" && opponentChoice === "Shoot"){// conditions for player to score
            let win = document.getElementById('playerClick')
            win.innerText = `Well done! You chose ${playerChoice} and opponent chose ${opponentChoice}`
            playerScore++;
            displayPlayerScore.innerHTML = `${playerScore}`
            resetOpponentDecision()
            console.log(opponentChoice)
        } else if(opponentChoice === "Shoot" && playerChoice === "Pass" || opponentChoice === "Pass" && playerChoice === "Block" || opponentChoice === "Block" && playerChoice === "Shoot"){ // conditions for opponent to score
            let lose = document.getElementById('playerClick')
            lose.innerText = `Touch luck! You chose ${playerChoice} and opponent chose ${opponentChoice}`
            opponentScore++;
            displayOpponentScore.innerHTML = `${opponentScore}`
            resetOpponentDecision()
            console.log(opponentChoice)
        } else{ // when conditions for opponent or player to score aren't met then its a draw
            let draw = document.getElementById('playerClick')
            draw.innerText = `You chose ${playerChoice} and your opponent chose ${opponentChoice}! Its a draw!`
            resetOpponentDecision()
            console.log(opponentChoice)
        }
        gameOver()
    }
}


