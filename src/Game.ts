import Board from './Board';

export default class Game {
  private board?: Board;
  private bTurnX = false;

  private cells = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
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
      this.board = new Board(domBoard, this);
      this.board.setCells(this.cells);
    }

    this.nextPlay();
  }

  public clickBoard(row: number, col: number) {
    if (this.cells[row][col] !== '') return;

    this.cells[row][col] = this.bTurnX ? 'X' : 'O';
    this.board?.setCells(this.cells);
    this.nextPlay();
  }

  public nextPlay() {
    this.bTurnX = !this.bTurnX;

    const domNextPlayer = document.querySelector('.next-player');
    if (domNextPlayer) {
      domNextPlayer.innerHTML =
        /*html */
        `
          Next Player: ${this.bTurnX ? 'X' : 'O'}
      `;
    }
  }
}
