/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


/**
* Creates a Phrase class to handle the creation of phrases
*/

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();    
    }

/**
* Display phrase on game board
*/
   addPhraseToDisplay() {
     
     let ul = document.getElementById('phrase').firstElementChild;   
     let splitPhrase = this.phrase.split('');        

    splitPhrase.forEach(character => {                 
         let li = document.createElement('li');
         ul.appendChild(li);
         li.innerHTML = `${character}`;
         

         if (character === ' ') {   
            li.classList.add('space');               
             
        } else { 
            li.classList.add('hide');                 
            li.classList.add('letter');
            li.classList.add(character);
        }
     })                  
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
  }


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
