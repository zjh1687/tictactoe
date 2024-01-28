import Board from './Board';

export default class Game {
  private board?: Board;

  private cells = [
    ['x', '', ''],
    ['', 'x', ''],
    ['', 'x', ''],
  ];

  constructor(domApp: Element) {
    domApp.innerHTML =
      /*html*/
      `
      <div class='app-left'>
        <div class='next-player'></div>
        <div class='board'></div>
      </div>
      <div class='app-right'>
        <div class='history'></div>
      </div>
    `;

    const domBoard = document.querySelector('.board');
    if (domBoard) {
      this.board = new Board(domBoard);
      this.board.setCells(this.cells);
    }
  }
}
