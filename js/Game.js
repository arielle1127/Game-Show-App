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
    }
}




