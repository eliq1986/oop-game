/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 const game = new Game();
 const randomPhrase = game.getRandomPhrase();
 const displayPhrase = new Phrase(randomPhrase);
 displayPhrase.addPhraseToDisplay();
