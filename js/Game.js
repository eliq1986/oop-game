/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game extends Phrase {
  constructor(missed = 0, phrases=[], activePhrase = null) {
    super();
    this.missed = missed;
    this.phrases = this.createPhrases();
    this.activePhrase = activePhrase;

  }

// method returns array of obj; called when obj instantiated
  createPhrases() {
    return[
    { phrase:"may the force be with you"},
    { phrase: "carpe diem"},
    { phrase:"To infinity and beyond"},
    { phrase:"I am your father"},
    { phrase: "Why so serious"}
  ];
  }

// method returns random phrase
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

//method accepts 1 arg; display value for start screen
  displayOverLay(displayValue) {
    document.querySelector("div#overlay").style.display= displayValue;
  }

//method removes previous letters if they exist
  removePhraseFromScreen() {
    const letters = document.querySelectorAll("div#phrase li");
    if(letters) {
      letters.forEach(letter => {
      const parentNode = letter.parentNode;
      parentNode.removeChild(letter);
    });
  }
  }

  resetHearts() {
    const hearts = document.querySelectorAll("li.tries img");
    hearts.forEach(heart => heart.src = "../images/liveHeart.png");
  }

  resetKeyboard() {
    const keyboardLetters = document.querySelectorAll("div#qwerty button");
    keyboardLetters.forEach(letter => {
      letter.className = "key";
      letter.removeAttribute("disabled");
    });
  }

  gameReset() {
    this.resetHearts();
    this.removePhraseFromScreen();
    this.resetKeyboard();
  }

// method runs when start button is clicked
  startGame() {

    this.removePhraseFromScreen();
    this.resetHearts();
    this.resetKeyboard();

    this.displayOverLay("none");
    const phrase = new Phrase(this.getRandomPhrase().phrase);
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase.phrase;
    }

  handleInteraction(letterToCheck) {
    if(!letterToCheck.textContent) {

      const keyboardLetters = [...document.querySelectorAll("div#qwerty button")];
      const letterToDisable = keyboardLetters.filter(letter => letter.textContent == letterToCheck);
    if(letterToDisable[0].className==="key") {
      const z =   this.checkLetter(letterToDisable[0]);
      z ? this.gameOver() : this.removeLife(z);
    }

    } else {
      const a = this.checkLetter(letterToCheck);
      letterToCheck.setAttribute("disabled", true);

      a ? this.gameOver() : this.removeLife(a);
    }

  }

  removeLife(letterFound) {
    if(!letterFound) {
     document.querySelectorAll("li.tries img")[this.missed].src = "../images/lostHeart.png";
      this.missed += 1;
      this.gameOver(this.missed);
    }

  }

  gameOver(missed) {
      const overlay = document.querySelector("div#overlay");
    if(missed === 5) {
      this.missed = 0;
      overlay.style.display = "block";
      overlay.className = "lose";

    } else if(this.checkForWin()) {
      overlay.style.display = "block";
      overlay.className= "win";
    }
    }

  checkForWin() {
    const lettersOnBoard = document.querySelectorAll("li[letter]");
    const lettersWithShowClass = document.querySelectorAll("li.show");
    if(lettersWithShowClass.length == lettersOnBoard.length){
      return true;
    }
     return false;
  }

}
