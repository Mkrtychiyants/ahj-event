// TODO: write code here
import Game from '../components/AILogic';
import GameController from '../components/gameController';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(document.querySelector('ul.board'));
  GameController(game);
});
