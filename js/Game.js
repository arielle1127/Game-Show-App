/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Game.js to create a Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

class Game {
    constructor() {
        this.missed = 0;     //keeps track of missed guesses
        this.phrases = this.createPhrases();   //holds an array of phrases that  was  created with the createPhrases method
        this.activePhrase = this.getRandomPhrase();   //this is the phrase object currently in play. initial setting is null
    }

/**
 * Creates phrases for use in game
 * @return {array} An array of phrases that could be used in the game
 */
    createPhrases() {
        const phrases = [new Phrase('Keep calm and carry on'),
                        new Phrase('Dont worry be happy'),
                        new Phrase('Hakuna Matata'),
                        new Phrase('Here comes the sun'),
                        new Phrase('positive vibrations')
                        ];
        return phrases;
    }

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {    //need to produce random number which is will be the random index of a phrase
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
        };


/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        let hideOverlay = document.getElementById('overlay').style.display = 'none';  //hides the overlay
        this.getRandomPhrase();                                  //gets + stores random phrase
        this.activePhrase.addPhraseToDisplay();              //adds hidden  phrase (gray boxes, spaces)
      this.missed = 0;
    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

gameOver(gameWon) {                                         //how does this method know what gameWon means?
    let overlay = document.getElementById('overlay');
    let gameOverMessage = document.getElementById("game-over-message");
    overlay.style.display = 'block';
    this.resetGame();
   
    if(gameWon) {
        gameOverMessage.textContent = 'Wow, you won!';
        overlay.classList = 'win';
    } else {   
        gameOverMessage.textContent = 'Sorry, you suck at this game!';
        overlay.classList = 'lose';
    }
};




 
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
    this.missed += 1;
    const tries = document.querySelector('.tries');
    const heart = tries.firstChild;
    tries.classList.remove('tries');
    heart.src = 'images/lostHeart.png';
    
    if(this.missed === 5) {
        this.gameOver(false);
    }
}



/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/

// How to win? Guess all the letters correctly
// if all li elements are changed from hidden to display, then you get a check for win

checkForWin() {
    const hiddenLetters = document.getElementsByClassName('hide');
    if(hiddenLetters.length === 0 && this.missed < 5) {    
        return true;
    } else {
        return false;
    }
}

/**
* Checks if the onscreen keyboard button clicked by the player matches a letter in the phrase
* then directs the game based on a correct or incorrect guess. 
*/


/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

handleInteraction(button) {
    button.disabled = true;
    const checkLetter = this.activePhrase.checkLetter(button.textContent);
   
    if (checkLetter) {
       button.classList.add('chosen');
       this.activePhrase.showMatchedLetter(button.textContent);
       this.checkForWin();
    } 
    
    else {
        button.classList.add('wrong');
        this.removeLife();
     }

    if (this.checkForWin()) {
        this.gameOver(true);
    } 
}



resetGame() {
    let ul = document.getElementById('phrase').firstElementChild;
    ul.innerHTML = '';
 

    let keys = document.getElementsByClassName('key'); 

    for (let i = 0; i < keys.length; i++) {
    keys[i].classList.remove('wrong'); 
    keys[i].classList.remove('chosen');     
    keys[i].disabled = false;
    }

    const hearts = document.querySelectorAll('#scoreboard li');
    for(let i= 0; i < hearts.length; i++) {
            hearts[i].className = 'tries';
            hearts[i].firstElementChild.src = 'images/liveHeart.png';
        }
    }

   


    
  
   

}




