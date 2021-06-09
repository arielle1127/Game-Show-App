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

         if (character === ' ') {   
            li.classList.add('space');               //if character is a space, add classList= space
             
        } else { 
            li.classList.add('hide');                 //if character is a letter, hide letter
            li.classList.add('letter');
        }
    });                  
  }
}






