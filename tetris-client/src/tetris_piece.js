class Tetris_piece {  
  constructor(ctx) {
    this.ctx = ctx;
    this.color = 'blue';
    this.shape = [
      [2, 0, 0], 
      [2, 2, 2], 
      [0, 0, 0]
    ];
    
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



}