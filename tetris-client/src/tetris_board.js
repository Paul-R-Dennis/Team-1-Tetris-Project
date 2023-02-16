// GameBoard class provides all the functionality of the game board
// 
class Gameboard {
  ctx;
  ctxNext;

  constructor(ctx, ctxNext) {
    this.ctx = ctx;
    this.ctxNext = ctxNext;
    this.init();
  }

  init() {
    this.ctx.canvas.width = COLS * BLOCK_SIZE;                         // Calculate size of canvas from constants.
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);                            // Scale so we don't need to give size on every draw.
  }

  reset() {                                                            // Reset the Game canvas
    this.grid = this.getEmptyBoard();
  }
  
  getEmptyBoard() {                                                    // Generate the empty board with zeros
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }


  draw() {

  }

}