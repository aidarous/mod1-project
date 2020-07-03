/* Basketball game rules and mechanics 
* Get to the basket by winning 3 turns before time runs out
* Guard moves are: shoot, assist, and steal
* Forward moves are: catch and shoot, cut to basket, and help defense
* Center moves are: dunk, pick and roll, block
*
* Shoot/Catch and shoot/dunk beats: pass, cut to basket, and pick and roll
* Pass/Cut to basket/Pick and roll beats: Steal, Help Defense, and block
* Steal/ Help Defense/ Block beats: Shoot, Catch and Shoot, and dunk 
*/


/* Archetype and moveset */

class Moveset {
    constructor(firstMove, secondMove, thirdMove){
        this.firstMove = firstMove;
        this.secondMove = secondMove;
        this.thirdMove = thirdMove;
    }
}



let shotClock = 24;

let players = ["Guard", "Forward", "Center"]
let guardMoveset = new Moveset("Shoot", "Pass", "Steal") 
let forwardMoveset = new Moveset("Catch and shoot", "Cut to basket", "Help defense")
let centerMoveset = new Moveset("Dunk", "Pick and roll", "Block")
let chooseOpponent = Math.floor(Math.random()*3);
let opponent = players[chooseOpponent]
console.log(opponent)

// choose a player
let choosePlayer = () => {


}

// create conditons for players to score
// 

    
    




