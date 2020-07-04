/* Basketball RPS */


/* Set up Global variables for future use*/

// const shotClock = 24;
const playerScore = 0;
const opponentScore = 0;

let moveSet = ["Shoot", "Pass", "Block"] 
let choiceGenerator = Math.floor(Math.random()*3); // randomizes the choice made by the computer

    let playerShoot = () => {
        document.getElementById('playerClick').innerHTML = 'Shoot!'
    }
    let playerPass = () => {
        document.getElementById('playerClick').innerHTML = 'Pass!'
    }
    let playerBlock = () => {
        document.getElementById('playerClick').innerHTML = 'Block!'
    }









    
    




