/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();

// listens to start button
document.querySelector("button#btn__reset").addEventListener("click", () => {
    game.startGame();
});

// listens to buttons "clicked" on only
document.querySelector("div#qwerty").addEventListener("click", event => {
    event.target.tagName === "BUTTON" ? game.handleInteraction(event.target) : null;
});

// listens to physical keyup on keyboard
document.addEventListener("keyup", event => {
    const keyboardRegrex = /^[A-Za-z]$/;
    const startScreen = document.querySelector("div#overlay");

    if (keyboardRegrex.test(event.key) && startScreen.style.display == "none") {
        game.handleInteraction(event.key.toLowerCase());
    }

});
