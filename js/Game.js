/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**Create a Game class to store methods for:
    * starting and ending the game
    * handling interactions
    * getting a random phrase
    * checking for a win
    * removing a life from the scoreboard
 */

class Game {
    constructor() {
        this.missed = 0;     
        this.phrases = this.createPhrases();   
        this.activePhrase = this.getRandomPhrase();   
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
        }


/**
* Begins game by:
    * hiding overlay
    * selecting a random phrase 
    * displaying random phrase hidden in gray squares
    * 
*/
    startGame() {
        let hideOverlay = document.getElementById('overlay').style.display = 'none';  
        this.getRandomPhrase();                                 
        this.activePhrase.addPhraseToDisplay();            
    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

    gameOver(gameWon) {                                        
        let overlay = document.getElementById('overlay');
        let gameOverMessage = document.getElementById("game-over-message");
        overlay.style.display = 'flex';
        this.resetGame();
    
        if(gameWon) {
            gameOverMessage.textContent = 'Wow, you won! Here\'s a cookie. 🍪';
            overlay.classList = 'win';
        } else {   
            gameOverMessage.textContent = 'Sorry, you lost. No cookie for you. 🚫🍪🚫';
            overlay.classList = 'lose';
        }
    }

 
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

    checkForWin() {
        const hiddenLetters = document.getElementsByClassName('hide');
        if(hiddenLetters.length === 0 && this.missed < 5) {    
            return true;
        } else {
            return false;
        }
    }


/**
* Handles onscreen keyboard button clicks by:
    *Checking if the onscreen keyboard button clicked by the player matches a letter in the phrase
    *then directing the game based on a correct or incorrect guess.
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


/**
* Resets the game entirely including:
    * hidden  phrase
    * chosen/wrong key buttons
    * lost hearts
*/

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




