import Game from './Game';

export type HistoryData = {
  bTurnX: boolean;
  cells: string[][];
  title: string;
};
export default class History {
  private domHistory: Element;
  private game: Game;
  private list: Array<HistoryData> = [];

  constructor(domHistory: Element, game: Game) {
    this.domHistory = domHistory;
    this.game = game;
  }

  public removeFromIndex(index: number) {
    this.list.splice(index + 1);
  }

  public add(data: HistoryData) {
    this.list.push(data);
    this.update();
  }

  private update() {
    this.domHistory.innerHTML = '';

    this.list.forEach((item, idx) => {
      const domItem = document.createElement('div');
      const title = item.title === '' ? `Go to move #${idx}` : item.title;
      domItem.innerHTML =
        /*html */
        `
        <button index=${idx}>${title}</button>
      `;
      this.domHistory.append(domItem);

      domItem.querySelector('button')!.addEventListener('click', (e) => {
        const index = (e?.currentTarget as Element)?.getAttribute('index');
        if (index !== null) {
          const nIdx = parseInt(index);
          const data = this.list[nIdx];
          this.game.restore(data, nIdx);
        }
      });
    });
  }
}
