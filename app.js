/* Basketball RPS */


/* Set up Global variables for future use*/

// const shotClock = 24;
const playerScore = 0;
const opponentScore = 0;

let moveSet = ["Shoot", "Pass", "Block"] 
let choiceGenerator = Math.floor(Math.random()*3); // randomizes the choice made by the computer
let opponentMove = moveSet[choiceGenerator];

let playerShoot = () => {   
    document.getElementById('playerClick').innerHTML = 'You chose shoot!'   
    document.getElementById('opponentChoice').innerHTML = `Opponent chose ${opponentMove}!`
    }
     
let playerPass = () => {  
    document.getElementById('playerClick').innerHTML = 'You chose pass!'
    document.getElementById('opponentChoice').innerHTML = `Opponent chose ${opponentMove}!`
    }  

let playerBlock = () => {
    document.getElementById('playerClick').innerHTML = 'You chose block!'
    document.getElementById('opponentChoice').innerHTML = `Opponent chose ${opponentMove}!`
    }









    
    




