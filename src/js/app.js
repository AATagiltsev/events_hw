import Game from "./game";

const gamePlay = new Game();
gamePlay.bindToDOM(document.querySelector(".container"));
gamePlay.drawField();
gamePlay.start(1000);
gamePlay.countHits();