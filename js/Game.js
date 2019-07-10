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

  createPhrases() {
    return[
    { phrase:"may the force be with you"},
    { phrase: "carpe diem"},
    { phrase:"To infinity and beyond"},
    { phrase:"I am your father"},
    { phrase: "Why so serious"}
  ];
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  displayOverLay(displayValue) {
    document.querySelector("div#overlay").style.display= displayValue;
  }

  startGame() {
    const letters = document.querySelectorAll("div#phrase li");
    const keyboardLetters = document.querySelectorAll("div#qwerty button");
    const hearts = document.querySelectorAll("li.tries img");
    hearts.forEach(heart => heart.src = "../images/liveHeart.png");

    if(letters) {
      letters.forEach(letter => {
      const parentNode = letter.parentNode;
      parentNode.removeChild(letter);
    });
    keyboardLetters.forEach(letter => {
      letter.className = "key";
      letter.removeAttribute("disabled");
    });
    }

    this.displayOverLay("none");
    const phrase = new Phrase(this.getRandomPhrase().phrase);
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase.phrase;
    }

  handleInteraction(letterToCheck) {
    console.log(letterToCheck);
  const a = this.checkLetter(letterToCheck);
  letterToCheck.setAttribute("disabled", true);

  a ? this.gameOver() : this.removeLife(a);

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
      overlay.classList.add("lose");

    } else if(this.checkForWin()) {
      overlay.style.display = "block";
      overlay.classList.add("win");
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
