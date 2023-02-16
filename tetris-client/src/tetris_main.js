const gamecanvas = document.getElementById('tetrisboard');             // Gris Context
const gamectx    = gamecanvas.getContext('2d');                        // 2D context
const gamenext       = document.getElementById('tetrisnrxt');          // Gris Context
const gamectxnext    = gamecanvas.getContext('2d');                    // 2D context

gamectx.canvas.width  = COLS * BLOCK_SIZE;                             // Set GRID width  - multiple of columns
gamectx.canvas.height = ROWS * BLOCK_SIZE;                             // Set GRID height - multiple of rows
gamectx.scale(BLOCK_SIZE, BLOCK_SIZE);                                 // Scale the blocks

let gameboard = new Tetris_board(gamectx, gamectxnext);                // Create Game board object














function play_tetris() {
  //console.log("Play Tetris --- Start");
  gameboard.reset();                                                   // Reset Game board to initial state
  //console.table(gameboard.grid);                                     // Debugging --- Show gameboard grid
  gameboard.draw();                                                    // Draw the game board
  let piece = new Tetris_piece(gamectx);
  piece.draw();
  gameboard.piece = piece;



  //console.log("Play Tetris --- End");
}