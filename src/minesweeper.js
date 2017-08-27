// const printBoard = (board) => {
//     console.log('Current Board: ');
//     console.log(board[0].join(' | '))
//     console.log(board[1].join(' | '))
//     console.log(board[2].join(' | '))
// }

// var board = [['','',''],
// ['','',''],
// ['','','']
// ];


// printBoard(board);
// board[0][1] = '1';
// board[2][2] = 'B';
// printBoard(board);


const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    var board = [];
    for (let i = 1; i < numberOfRows; i++){
        var row = [];
        for(let j = 0; j < numberOfColumns; j++){
            row.push(' ');
        } board.push(row);
    } return board
};

const generatingBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    var board = [];
    for (let i = 1; i < numberOfRows; i++){
        var row = [];
        for(let j = 0; j < numberOfColumns; j++){
            row.push(null);
        } board.push(row);
    } 
    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs){
        //An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomRowColumn = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++
    }
    
    
    
    
    
    return board
};