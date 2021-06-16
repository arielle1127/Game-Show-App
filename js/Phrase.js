/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


//Phrase.js to create a Phrase class to handle the creation of phrases.
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();    //creates a phrase  property in lower case
    }


/**
* Display phrase on game board
*/
   addPhraseToDisplay() {
     
     let ul = document.getElementById('phrase').firstElementChild;   //reference the ul so we can append li later
     let splitPhrase = this.phrase.split('');          //split the random phrase into an  array of seperate characters

    splitPhrase.forEach(character => {                  //make each character into a li
         let li = document.createElement('li');
         ul.appendChild(li);
         li.innerHTML = `${character}`;
         

         if (character === ' ') {   
            li.classList.add('space');               //if character is a space, add classList= space
             
        } else { 
            li.classList.add('hide');                 //if character is a letter, hide letter
            li.classList.add('letter');
            li.classList.add(character);
        }
    });                  
  }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter) {
    if(this.phrase.includes(letter)) {    
        return true;
    } else {
        return false;
    }
  };




/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/

showMatchedLetter(letter) {
    const selectedLetters = document.getElementsByClassName(letter);
    for (let i = 0; i < selectedLetters.length; i++) {
         selectedLetters[i].classList.replace('hide', 'show');
    }
  }

 }
