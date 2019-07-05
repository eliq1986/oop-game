/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

  class Phrase {
   constructor({ phrase }) {
     this.phrase = phrase;

   }

   addPhraseToDisplay() {
     const phraseContainer = document.querySelector("div#phrase ul");
     const phraseSplitted = this.phrase.split("");
     phraseSplitted.forEach(letter => {
       const li = document.createElement("li");
       if(letter !== " ") {
         li.classList.add("letter", "hide");
         li.textContent = letter;
         phraseContainer.appendChild(li);
       } else {
         li.classList.add("space", "hide");
         li.textContent = letter;
         phraseContainer.appendChild(li);
       }

     });
   }

     checkLetter(letterChosen) {


     }

     get currentPhrase() {
       return this.phrase;
     }

  }
