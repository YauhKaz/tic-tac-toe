class TicTacToe {

    constructor() {        
        this.field =[   [null,null,null],
                        [null,null,null],
                        [null,null,null]
                    ];
        this.currentPlayer = true;
        this.finishGame = false;
        this.winnerGame = null;
        this.steps = 9;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer?'x':'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentPlayer = !this.currentPlayer;
            this.steps--;
            if (this.steps === 0) {
                this.finishGame = true;
            }
            if (this.steps < 5) {
                this.foundWinner();
            }                       
        }
    }

    isFinished() {
        return this.finishGame;
    }

    getWinner() {
        return this.winnerGame;
    }

    noMoreTurns() {
        if (this.steps !== 0) return false;
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() == null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }

    foundWinner() {
        let winner = null;
        let xx=0,xy=0,xc=0,xr=0;
        let ox=0,oy=0,oc=0,or=0;
        for (let i=0;i<3;i++) {
            if (this.field[i][i] == 'x') {
                xc++;
            }
            if (this.field[i][i] == 'o') {
                oc++;
            }
            if (this.field[2-i][i] == 'x') {
                xr++;
            }
            if (this.field[2-i][i] == 'o') {
                or++;
            }
            for (let j=0;j<3;j++){
                if (this.field[i][j] == 'x') {
                    xx++;
                }
                if (this.field[i][j] == 'o') {
                    ox++;
                }
            }
            for (let j=0;j<3;j++){
                if (this.field[j][i] == 'x') {
                    xy++;
                }
                if (this.field[j][i] == 'o') {
                    oy++;
                }
            }
            if (xx === 3 || xy === 3) winner = 'x';
            else {xx=0;xy=0;}
            if (ox === 3 || oy === 3) winner = 'o';
            else {ox=0;oy=0;} 
        }      
        if (xc === 3 || xr === 3) winner = 'x';
        else {xc=0;xr=0;}
        if (oc === 3 || or === 3) winner = 'o';
        else {oc=0;or=0;}
        if (winner !== null) {
            this.finishGame = true;
            this.winnerGame = winner;
            return true;
        }  
    }
}

module.exports = TicTacToe;
