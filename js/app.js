/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 const game = new Game();


document.querySelector("button#btn__reset").addEventListener("click", ()=> {
    game.startGame();
});

document.querySelector("div#qwerty").addEventListener("click", (event)=> {
   event.target.tagName === "BUTTON" ? game.handleInteraction(event.target) : null;
});


document.addEventListener("keyup", (event)=> {
   game.handleInteraction(event.key);

});
