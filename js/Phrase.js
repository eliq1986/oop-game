/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

  class Phrase {
   constructor( phrase ) {
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
         li.setAttribute("letter", letter.toLowerCase());
         phraseContainer.appendChild(li);
       } else {
         li.classList.add("space", "hide");
         li.textContent = letter;
         phraseContainer.appendChild(li);
       }

     });
   }

   checkLetter(letterToCheck) {
     const phrase = this.activePhrase.toLowerCase().split("");
     const lettersFound = phrase.filter(letter => letter.toLowerCase() === letterToCheck.textContent);
     if (!lettersFound.length) {
       letterToCheck.classList.add("wrong");
       return false;
     } else {
       letterToCheck.classList.add("chosen");
       this.showMatchedLetter(letterToCheck.textContent);
       return true;
     }

   }

     showMatchedLetter(letterToCheck) {
         const letterThatMatch = document.querySelectorAll(`li[letter=${letterToCheck}]`)
         letterThatMatch.forEach(letter => letter.className = "show");
     }


  }
