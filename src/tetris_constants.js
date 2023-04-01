//'use strict';
                                                                       // Tetris game GRID
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const LINES_PER_LEVEL = 10;

const NEXTCOLS = 05;                                                   // Next piece grid columns
const NEXTROWS = 06;                                                   // Next piece grid rows

                                                                       // Colors for Tetris blocks
const COLORS = [
  "#fff",
  "#9b5fe0",
  "#16a4d8",
  "#60dbe8",
  "#8bd346",
  "#efdf48",
  "#f9a52c",
  "#d64e12"
];
  // 'none',
  // 'cyan',
  // 'blue',
  // 'orange',
  // 'yellow',
  // 'green',
  // 'purple',
  // 'red'
Object.freeze(COLORS);
                                                                       // Tetris Block shapes
const SHAPES = [
[
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]
],
[
    [0,1,0],  
    [0,1,0],  
    [1,1,0]   
],
[
    [0,1,0],
    [0,1,0],
    [0,1,1]
],
[
    [1,1,0],
    [0,1,1],
    [0,0,0]
],
[
    [0,1,1],
    [1,1,0],
    [0,0,0]
],
[
    [1,1,1],
    [0,1,0],
    [0,0,0]
],
[
    [1,1],
    [1,1],
]];
Object.freeze(SHAPES);
                                                                       // Tetris game playing keys
const KEY = {
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  P: 80
}
Object.freeze(KEY);

