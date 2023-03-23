class Tetris_piece {  
  x;                                                                   // piece x position
  y;                                                                   // piece y position
  color;                                                               // color of the piece
  shape;                                                               // shape of the piece
  ctx;                                                                 // context for drawing
  typeId;                                                              // type of the piece


  constructor(ctx) {
    this.ctx = ctx;


    // This is HARD CODED for demo purposes

    this.typeId = this.randomizeTetrominoType(COLORS.length - 1);      // random piece #
    this.color = COLORS[this.typeId];                                  // color for selected piece
    this.shape = SHAPES[this.typeId];                                  // shape for selected piece

    // this.color = 'blue';
    // this.shape = [
    //   [2, 0, 0], 
    //   [2, 2, 2], 
    //   [0, 0, 0]
    // ];
                                                                       // Starting position.
    this.x = 4;
    this.y = 0;
  }

                                                                       // Draw a piece
                                                                       // this.x, this.y gives the left upper position of the shape
                                                                       // x, y gives the position of the block in the shape
                                                                       // this.x + x is then the position of the block on the board
  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  setStartingPosition() {                                              // Start based on block size
    this.x = this.typeId === 4 ? 4 : 3;
  }

  randomizeTetrominoType(noOfTypes) {                                  // Return random block type
    return Math.floor(Math.random() * noOfTypes + 1);
  }

  move(p) {                                                            // Move Piece to new position
    this.x = p.x;
    this.y = p.y;
    this.shape = p.shape;
  }

}