/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
  constructor(missed = 0, phrases=[], activePhrase = null) {
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
    this.displayOverLay("none");
    const phrase = new Phrase(this.getRandomPhrase());
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase.currentPhrase;
    }


}
