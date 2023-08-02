export default class Game {
  constructor(element) {
    this.element = element;
    this.occupiedCell = 0;
  }

  generatePosition() {
    const newPosition = Math.floor(Math.random() * (this.element.children.length - 1));
    if (newPosition === this.occupiedCell) {
      return this.generatePosition();
    }
    this.occupiedCell = newPosition;
    return newPosition;
  }

  deleteActive() {
    this.element.children[this.occupiedCell].textContent = '';
  }

  createBait() {
    const newImg = document.createElement('img');
    newImg.className = 'character';
    const act = this.generatePosition();
    this.element.children[act].appendChild(newImg);
  }
}
