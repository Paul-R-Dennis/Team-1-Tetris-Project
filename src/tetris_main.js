const gamecanvas = document.getElementById('tetrisboard');             // Gris Context
const gamectx    = gamecanvas.getContext('2d');                        // 2D context
const gamenext       = document.getElementById('tetrisnext');          // Gris Context
const gamectxnext    = gamenext.getContext('2d');                      // 2D context

gamectx.canvas.width  = COLS * BLOCK_SIZE;                             // Set GRID width  - multiple of columns
gamectx.canvas.height = ROWS * BLOCK_SIZE;                             // Set GRID height - multiple of rows
gamectx.scale(BLOCK_SIZE, BLOCK_SIZE);                                 // Scale the blocks

let gameboard = new Tetris_board(gamectx, gamectxnext);                // Create Game board object
let gamestatus = new Tetris_status();                                  // Create Game status object
let scoreboard = document.querySelector("#score");

let grid = generateGrid();
let fallingPieceObj = null;
let score = 0;
let set_interval_id = null;                                            // Game interval ID - needs to be global - multiple functions need it

gamestatus.set_playbutton_status();                                    // Set the play button status to enabled & pause button to disabled
gamestatus.set_login_status();                                         // Set the login status to enabled

document.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == "ArrowDown" && gamestatus.get_is_game_in_play_mode()){
        moveDown();
    }else if(key == "ArrowLeft" && gamestatus.get_is_game_in_play_mode()){
        moveLeft();
    }else if(key == "ArrowRight" && gamestatus.get_is_game_in_play_mode()){
        moveRight();
    }else if(key == "ArrowUp" && gamestatus.get_is_game_in_play_mode()){
        rotate();
    }
})







function play_tetris() {

  gamestatus.set_pausebutton_status();                                 // Set the play button status to disabled & pause button to enabled

  set_interval_id = setInterval(newGameState,500);                     // Start the GAME !!!!!

}


function pause_tetris() {
    gamestatus.set_playbutton_status();                                // Set the play button status to disabled & pause button to enabled

    clearInterval(set_interval_id);                                    // Pause THE GAME !!!!!

}




// function play_tetris() {
//   gamestatus.set_pausebutton_status();                                 // Set the play button status to disabled & pause button to enabled
//   //console.log("Play Tetris --- Start");
//   gameboard.reset();                                                   // Reset Game board to initial state
//   //console.table(gameboard.grid);                                     // Debugging --- Show gameboard grid
//   gameboard.draw();                                                    // Draw the game board
//   let piece = new Tetris_piece(gamectx);
//   piece.draw();
//   gameboard.piece = piece;
//   //console.log("Play Tetris --- End");
// }

function login_tetris() {
  window.location.href = "../login.html";
  

}




function newGameState(){
    checkGrid();
    if(!fallingPieceObj){
        fallingPieceObj = randomPieceObject();
        renderPiece();
    }
   
    moveDown();

   }

function checkGrid(){
    let count = 0;
    for(let i=0;i<grid.length;i++){
        let allFilled = true;
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] == 0){
                allFilled = false
            }
        }
        if(allFilled){
            count++;
            grid.splice(i,1);
            grid.unshift([0,0,0,0,0,0,0,0,0,0]);
        }
    }
    if(count == 1){
        score+=10;
    }else if(count == 2){
        score+=30;
    }else if(count == 3){
        score+=50;
    }else if(count>3){
        score+=100
    }
    scoreboard.innerText = score;
}

function generateGrid(){
    let grid = [];
    for(let i=0;i<ROWS;i++){
        grid.push([]);
        for(let j=0;j<COLS;j++){
            grid[i].push(0)
        }
    }
    return grid;
}

function randomPieceObject(){
    let ran = Math.floor(Math.random()*7);
    let piece = SHAPES[ran];
    let colorIndex = ran+1;
    let x = 4;
    let y = 0;
    return {piece,colorIndex,x,y}
}

function renderPiece(){
    let piece = fallingPieceObj.piece;
    for(let i=0;i<piece.length;i++){
        for(let j=0;j<piece[i].length;j++){
            if(piece[i][j] == 1){
            gamectx.fillStyle = COLORS[fallingPieceObj.colorIndex];
            gamectx.fillRect(fallingPieceObj.x+j,fallingPieceObj.y+i,1,1);
        }
        }
    }
}

function moveDown(){
    if(!collision(fallingPieceObj.x,fallingPieceObj.y+1))
        fallingPieceObj.y+=1;
    else{
        let piece = fallingPieceObj.piece
        for(let i=0;i<piece.length;i++){
            for(let j=0;j<piece[i].length;j++){
                if(piece[i][j] == 1){
                    let p = fallingPieceObj.x+j;
                    let q = fallingPieceObj.y+i;
                    grid[q][p] = fallingPieceObj.colorIndex;
                }
            }
        }
        if(fallingPieceObj.y == 0){
            alert("gamer over");
            grid = generateGrid();
            score = 0;
        }
        fallingPieceObj = null;
    }
    renderGame();
}


function collision(x,y,rotatedPiece){
    let piece = rotatedPiece || fallingPieceObj.piece
    for(let i=0;i<piece.length;i++){
        for(let j=0;j<piece[i].length;j++){
            if(piece[i][j] == 1){
            let p = x+j;
            let q = y+i;
            if(p>=0 && p<COLS && q>=0 && q<ROWS){
                if(grid[q][p]>0){
                    return true;
                }
            }else{
                return true;
            }}
        }
    }
    return false;
}

function renderGame(){
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            gamectx.fillStyle = COLORS[grid[i][j]];
            gamectx.fillRect(j,i,1,1)
        }
    }
    renderPiece();
}
function moveLeft(){
    if(!collision(fallingPieceObj.x-1,fallingPieceObj.y))
        fallingPieceObj.x-=1;
    renderGame();
}

function moveRight(){
    if(!collision(fallingPieceObj.x+1,fallingPieceObj.y))
        fallingPieceObj.x+=1;
    renderGame();
}

function rotate(){
    let rotatedPiece = [];
    let piece = fallingPieceObj.piece;
    for(let i=0;i<piece.length;i++){
        rotatedPiece.push([]);
        for(let j=0;j<piece[i].length;j++){
            rotatedPiece[i].push(0);
        }
    }
    for(let i=0;i<piece.length;i++){
        for(let j=0;j<piece[i].length;j++){
            rotatedPiece[i][j] = piece[j][i]
        }
    }

    for(let i=0;i<rotatedPiece.length;i++){
        rotatedPiece[i] = rotatedPiece[i].reverse();
    }
    if(!collision(fallingPieceObj.x,fallingPieceObj.y,rotatedPiece))
        fallingPieceObj.piece = rotatedPiece
    renderGame()
}
