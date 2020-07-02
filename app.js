/* Basketball game rules and mechanics 
* Get to the basket by winning 3 turns before time runs out
* Guard moves are: shoot, pass, and steal
* Forward moves are: catch and shoot, cut to basket, and help defense
* Center moves are: dunk, pick and roll, block
*
* Shoot/Catch and shoot/dunk beats: pass, cut to basket, and pick and roll
* Pass/Cut to basket/Pick and roll beats: Steal, Help Defense, and block
* Steal/ Help Defense/ Block beats: Shoot, Catch and Shoot, and dunk 
*/


/* Player class and archetype */

// all archetype stats will be on a scale of 1-10
class Player  {
    constructor(name, firstMove, secondMove, thirdMove){
        this.name = name;
        this.firstMove = firstMove;
        this.secondMove = secondMove;
        this.thirdMove = thirdMove;
    }
}


let choose =prompt("Please pick a player \nPress 1 for Guard \nPress 2 for Forward \nPress 3 for Center")

if(choose == "1"){
    let guard = new Player("Guard", "Shoot", "Pass", "Steal")
    console.log("You choose Guard!")
    console.log(guard)
}else if(choose == "2"){
    let forward = new Player("Forward", "Catch and shoot", "Cut to basket", "Help defense")
    console.log("You choose Forward")
}else if(choose == "3"){
    let center = new Player("Center", "Dunk", "Pick and roll", "Block")
    console.log("You choose Center")
}
    
    
    




