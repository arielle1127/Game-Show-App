/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 * Clicks  on the 'Start Game' button will:
    * instantiate a new Game object
    * Display new game board with startGame();
 */


let game;                          

document.getElementById('btn__reset').addEventListener('click', () => {   
    game = new Game();             
    game.startGame();              
});




/**
 * Clicks on the onscreen keyboard buttons will:
    * call handleInteraction(); 
 */

let keys = document.getElementsByClassName('key'); 

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e) => {
      game.handleInteraction(e.target);
    })
}
