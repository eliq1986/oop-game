/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
  constructor(missed = 0, phrases = [], activePhrase = null) {
    this.missed = missed;
    this.phrases = phrases;
    this.activePhrase = activePhrase;
  }
  createPhrases() {
    return [
    "may the force be with you",
    "carpe diem",
    "To infinity and beyond!",
    "I am your father",
    "Why so serious?"
  ]
  }

    set phrases(methodCall) {

    }


}
