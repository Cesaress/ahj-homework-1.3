import gamePlay from "./gamePlay";

const game = new gamePlay();
game.bindToDOM(document.querySelector(".table-game"));
game.drawField();
game.goblin();
game.game();