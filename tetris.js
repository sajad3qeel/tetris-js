const I = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
    ]
];

const J = [
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ]
];

const L = [
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ]
];

const O = [
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ]
];

const S = [
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
];

const T = [
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
];

const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
    ]
];

const cvs = document.getElementById('board')
const ctx = cvs.getContext('2d')
const canvasNext = document.getElementById('next');
const ctxNext = canvasNext.getContext('2d');
const linesElement = document.getElementById("lines");


const ROW = 20
const COL = 10
const SQ = 30
const blank = '#181818'

function drawSquare (x, y, color) {
  ctx.fillStyle = color
  ctx.fillRect(x*SQ,y*SQ,SQ,SQ)

  ctx.strokeStyle = blank
  ctx.strokeRect(x*SQ,y*SQ,SQ,SQ)
}

/*function drawNext (x, y, color) {
//TODO
    ctxNext.fillStyle = color
    ctxNext.fillRect(x*SQ,y*SQ,SQ,SQ)

    ctxNext.strokeStyle = 'red'
    ctxNext.strokeRect(x*SQ,y*SQ,SQ,SQ)
}*/

let board = []
for (r = 0 ; r < ROW; r++) {
  board[r] = []
  for (c = 0 ; c < COL ; c++) {
    board[r][c] = blank
  }
}

function drawBoard () {
    for (r = 0 ; r < ROW ; r++){
        for (c = 0 ; c < COL ; c++){
            drawSquare(c,r,board [r][c])
            // drawNext(c,r,board [r][c])



        }
    }

}
drawBoard()
// the pieces and their colors


const PIECES = [
    [Z,'#BE2F2A'],
    [S,'#67AC5B'],
    [T,'#8F36AA'],
    [O,'#F5C243'],
    [L,'#EB6436'],
    [I,'#4BA7ED'],
    [J,'#1484D8'],
]

function randomPiece() {
    let r = Math.floor(Math.random() * PIECES.length)

    return new piece(PIECES[r][0],PIECES[r][1])
    
}
let p = randomPiece();

function piece(tetromino,color) {
    this.tetromino = tetromino
    this.color = color

    this.tetrominoN = 0
    this.activeTetromino = this.tetromino[this.tetrominoN]

    this.x = 3
    this.y = -2

}


piece.prototype.fill = function (color) {
    for (r = 0 ; r < this.activeTetromino.length ; r++) {
        for (c = 0 ; c < this.activeTetromino.length ; c++) {
            if (this.activeTetromino[r][c]) {
                drawSquare(this.x + c , this.y + r , color)
                // drawNext(c , r , color)

            }
        }
    }
}
// piece.prototype.fillNext = function (color) {
//     for (r = 0 ; r < this.activeTetromino.length ; r++) {
//         for (c = 0 ; c < this.activeTetromino.length ; c++) {
//             if (this.activeTetromino[r][c]) {
//                 drawNext(c , r , color)
//
//
//             }
//         }
//     }
// }

piece.prototype.draw = function () {
this.fill(this.color)


}

piece.prototype.unDraw = function () {
this.fill(blank)
}



piece.prototype.moveDown = function () {
    if (!this.collision(0,1,this.activeTetromino)) {
        this.unDraw()
        this.y++
        this.draw()

    }else {
        this.lock()
        p = randomPiece();
    }


}

piece.prototype.moveRight = function () {
    if (!this.collision(1,0,this.activeTetromino)) {
        this.unDraw()
        this.x++
        this.draw()
    }
}

piece.prototype.moveLeft = function () {
    if (!this.collision(-1 ,0,this.activeTetromino)) {
        this.unDraw()
        this.x--
        this.draw()
    }
}

piece.prototype.rotate = function () {
    let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length]
    let kick = 0
    if (this.collision(0,0,nextPattern)) {
        if (this.x > COL/2) {
            kick = -1
        }else {
            kick = 1
        }
    }
    if (!this.collision(kick,0,nextPattern)) {
        this.unDraw()
        this.x += kick
        this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length
        this.activeTetromino = this.tetromino[this.tetrominoN]
        this.draw()
    }
}
let lines = 0
piece.prototype.lock = function() {
    for (r = 0; r < this.activeTetromino.length; r++) {
        for (c = 0; c < this.activeTetromino.length; c++) {
            if (!this.activeTetromino[r][c]) {
                continue
            }
            if (this.y - r < 0) {
                alert('Game Over!')
                gameOver = true;
                break
            }
            board[this.y + r][this.x + c] = this.color;
        }
    }
    for (r = 0; r < ROW; r++) {
        let isRowFull = true;
        for (c = 0; c < COL; c++) {
            isRowFull = isRowFull && (board[r][c] != blank);
        }
        if (isRowFull) {
            // if the row is full
            // we move down all the rows above it
            for (y = r; y > 1; y--) {
                for (c = 0; c < COL; c++) {
                    board[y][c] = board[y - 1][c];
                }
            }
            // the top row board[0][..] has no row above it
            for (c = 0; c < COL; c++) {
                board[0][c] = blank;
            }
            // increment the lines
            lines ++;
        }
    }
    drawBoard()

    linesElement.innerHTML = lines;
}
piece.prototype.collision = function(x,y,piece) {
    for (r = 0 ; r < piece.length ; r++) {
        for (c = 0 ; c < piece.length; c++) {

            if (!piece[r][c]) {
                continue
            }
            let newX = this.x + c + x
            let newY = this.y + r + y

            if (newX < 0 || newX >= COL || newY >= ROW) {
                return true
            }

            if (newY < 0 ) {
                continue
            }

            if( board[newY][newX] != blank){
                return true;
            }
        }

    }
}





let dropStart = Date.now()
let gameOver = false
function drop() {
    let now = Date.now()
    let delta = now - dropStart
    if (delta > 1000){
        p.moveDown()

        dropStart = Date.now()
    }
    if (!gameOver){
        requestAnimationFrame(drop)

    }

}


function START() {
    drop()
    document.addEventListener('keydown',CONTROL)
    function CONTROL(event) {
        if (event.keyCode == 37){
            p.moveLeft()
            dropStart = Date.now()
        }else  if (event.keyCode == 38){
            p.rotate()
            dropStart = Date.now()
        }else if (event.keyCode == 39){
            p.moveRight()
            dropStart = Date.now()
        }else if (event.keyCode == 40){
            p.moveDown()
        }

    }
}

