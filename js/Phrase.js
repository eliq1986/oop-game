/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

  class Phrase {
   constructor(phrase) {
     this.phrase = phrase;
   }

// method takes no arg; appends letters to DOM
   addPhraseToDisplay() {
     const phraseSplitted = this.phrase.split("");
       phraseSplitted.forEach(letter => {
       this.createAndAppendElement(letter);
     });
   }


// method takes 1 arg event.target; checks if phrase contains letter selected
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


// method takes 1 arg a str; takes phrase and appends each letter/space to DOM
   createAndAppendElement(letter) {
     const phraseContainer = document.querySelector("div#phrase ul");
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

   }


// method takes 1 arg; runs if match letter and changes className => show
     showMatchedLetter(letterToCheck) {
       document.querySelectorAll(`li[letter=${letterToCheck}]`).
       forEach(letter => letter.className = "show");
     }


  }
