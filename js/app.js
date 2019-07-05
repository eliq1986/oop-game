/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 const game = new Game();


document.querySelector("button#btn__reset").addEventListener("click", ()=> {
    game.startGame();
});
