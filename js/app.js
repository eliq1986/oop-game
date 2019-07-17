/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;

// listens to start button
document.querySelector("button#btn__reset").addEventListener("click", () => {
    game = new Game();
    game.startGame();

});

// listens to buttons "clicked" on only
document.querySelector("div#qwerty").addEventListener("click", event => {
   if(document.querySelector("img.thanos") && !game.gameFinished) {
    event.target.tagName === "BUTTON" ? game.handleInteraction(event.target) : null;
   }

});

// listens to physical keyup on keyboard
document.addEventListener("keyup", event => {
    const keyboardRegrex = /^[A-Za-z]$/;
    const startScreen = document.querySelector("div#overlay");

    if (keyboardRegrex.test(event.key) &&
        startScreen.style.display == "none" &&
        document.querySelector("img.thanos") &&
        !game.gameFinished
      )
    {

        game.handleInteraction(event.key.toLowerCase());
    }

});



//https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      document.querySelector('#iframeAudio').remove()
    }
  else {
     document.querySelector('#playAudio').remove();//just to make sure that it will not have 2x audio in the background
  }
