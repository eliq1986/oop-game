/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game extends Phrase {
    constructor(missed = 0, phrases = [], activePhrase = null) {
        super();
        this.missed = missed;
        this.phrases = this.createPhrases();
        this.activePhrase = activePhrase;
        this.win = "Great job you won!!";
        this.lose = "“Winning is great, sure, but if you are really going to do something in life, the secret is learning how to lose, try again";

    }


    // method returns array of obj; called when obj instantiated
    createPhrases() {
        return [{
                phrase: "may the force be with you"
            },
            {
                phrase: "carpe diem"
            },
            {
                phrase: "To infinity and beyond"
            },
            {
                phrase: "I am your father"
            },
            {
                phrase: "Why so serious"
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
        if (!letterFound) {
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

        if (missed === 5) {

            this.endGameOverLay("lose");


        } else if (this.checkForWin()) {

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
