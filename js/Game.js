/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game extends Phrase {
    constructor(missed = 0, phrases = [], activePhrase = null, gameFinished=false) {
        super();
        this.missed = missed;
        this.phrases = this.createPhrases();
        this.activePhrase = activePhrase;
        this.win = "You went for the head!!";
        this.lose = "You could not live with your own failure. Where did that bring you? Back to me";
        this.gameFinished = false;
    }


    // method returns array of obj; called when obj instantiated
    createPhrases() {
        return [{
                phrase: "I can do this all day"
            },
            {
                phrase: "Some people move on but not us"
            },
            {
                phrase: "Avengers Assemble"
            },
            {
                phrase: "You should have gone for the head"
            },
            {
                phrase: "The hardest choices require the strongest wills"
            }
        ];
    }

    showThanos() {
      document.querySelector("img.thanos").className ="showThanos";
      setTimeout(()=> {
        document.querySelector("img.showThanos").className ="thanos";
      }, 500)
    }


    // method returns random phrase
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }


    // method accepts 1 arg; display value for start screen
    displayOverLay(displayValue) {
        document.querySelector("div#overlay").style.display = displayValue;
    }


    // method removes previous letters if they exist
    removePhraseFromScreen() {
        const letters = document.querySelectorAll("div#phrase li");
        if (letters) {
            letters.forEach(letter => {
                const parentNode = letter.parentNode;
                parentNode.removeChild(letter);
            });
        }
    }


    // method replaces lostHeart.png to liveHeart.png
    resetHearts() {
        const hearts = document.querySelectorAll("li.tries img");
        hearts.forEach(heart => heart.src = "./images/liveHeart.png");
    }


    // method resets keyboard to original form
    resetKeyboard() {
        const keyboardLetters = document.querySelectorAll("div#qwerty button");
        keyboardLetters.forEach(letter => {
            letter.className = "key";
            letter.removeAttribute("disabled");
        });
    }


    // method takes no arg; resets hearts, phrase and keyboard
    gameReset() {
        this.resetHearts();
        this.removePhraseFromScreen();
        this.resetKeyboard();
        this.missed = 0;
        this.gameFinished = false;
    }


    // method runs when start button is clicked
    startGame() {

      if(this.activePhrase) {
        this.gameReset();

      }


        this.displayOverLay("none");
        const phrase = new Phrase(this.getRandomPhrase().phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase.phrase;

    }


    // method takes 1 str arg; checks if letter matches game letter
    keyboardInteraction(letterToCheck) {

        const keyboardLetters = [...document.querySelectorAll("div#qwerty button")];
        const letterToDisable = keyboardLetters.filter(letter => letter.textContent == letterToCheck);
        letterToDisable[0].setAttribute("disabled", true);

        if (letterToDisable[0].className === "key") {

            const wasLetterFound = this.checkLetter(letterToDisable[0]);

            wasLetterFound ? this.gameOver() : this.removeLife(wasLetterFound);

        }

    }


    // method takes event.target arg; checks if letter matches game letter
    mouseInteraction(letterToCheck) {

        const wasLetterFound = this.checkLetter(letterToCheck);
        letterToCheck.setAttribute("disabled", true);

        wasLetterFound ? this.gameOver() : this.removeLife(wasLetterFound);
    }


    // method takes 1 arg event.target and checks if keyup or mouse click
    handleInteraction(letterToCheck) {

        if (!letterToCheck.textContent) {

            this.keyboardInteraction(letterToCheck);

        } else {

            this.mouseInteraction(letterToCheck);

        }

    }


    // method takes 1 arg a boolean; replaces heart with gray heart if bool is false;
    removeLife(letterFound) {
        if (!letterFound && !this.checkForWin()) {
            this.showThanos();
            document.querySelectorAll("li.tries img")[this.missed].src = "./images/lostHeart.png";
            this.missed += 1;
            this.gameOver(this.missed);
        }

    }


    // method takes str arg; adds className to startscreen overlay
    endGameOverLay(winOrLose) {

      setTimeout(()=> {
        const overlay = document.querySelector("div#overlay");
        overlay.style.display = "block";
        overlay.className = winOrLose;
        document.querySelector("h1#game-over-message").textContent = this[winOrLose];
      },500);

    }


    // method takes 1 number arg; checks if player missed or correctly guessed phrase
    gameOver(missed) {

        if (missed === 5 && !this.checkForWin()) {
            this.gameFinished = true;
            this.endGameOverLay("lose");

        } else if (this.checkForWin()) {
            this.gameFinished = true;
            this.endGameOverLay("win");

        }
    }

    // method takes no arg; compares length of two collections.If length matches user wins.
    checkForWin() {

        const lettersOnBoard = document.querySelectorAll("li[letter]");
        const lettersWithShowClass = document.querySelectorAll("li.show");
        return lettersWithShowClass.length == lettersOnBoard.length ? true : false;

    }

}
