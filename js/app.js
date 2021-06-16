/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//app.js created to create a new instance of the `Game` class and add event listeners for the start button and onscreen keyboard buttons.



let game;                           //empty game variable

document.getElementById('btn__reset').addEventListener('click', () => {   //eventListener triggered by click on btn__reset
    game = new Game();             //instantiates new game object
    game.startGame();              //calls startGame method on new game object- which will display the game board
});





let keyboard = document.getElementById('qwerty'); //Disable the selected letter’s onscreen keyboard button.

keyboard.addEventListener('click', (e) => {
   game.handleInteraction(e.target);
}); 


