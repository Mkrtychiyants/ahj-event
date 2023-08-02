export default class GameController {
  constructor(element) {
    this.element = element;
    this.handler = this.handler.bind(this);
    this.element.element.addEventListener('click', this.handler);
    this.pointsCount = 0;
    this.playerScoreCount = 0;
    this.round();
  }

  round() {
    this.timeout = setInterval(() => {
      this.element.deleteActive();
      this.element.createBait();
      this.pointsCount += 1;
      if (this.pointsCount === 5) {
        clearTimeout(this.timeout);
        this.element.deleteActive();
        alert('You lose! F5 to restart');
      }
    }, 1000);
  }

  handler(e) {
    if (e.target.className.includes('character')) {
      const imgParent = e.target.closest('.cell');
      imgParent.querySelector('.character').remove();
      this.element.deleteActive();
      clearTimeout(this.timeout);
      this.playerScoreCount += 1;
      alert('You Win!');
      alert(this.playerScoreCount);
    }
  }
}
