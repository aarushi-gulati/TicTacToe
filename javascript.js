let gb = new gameboard();
    gb.create();
    let symbol = "O";
    let dabbe = document.querySelectorAll(".box")


dabbe.forEach((dabba) => {
    dabba.addEventListener('click', func);
});

function resetGame(){
    gb.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    let result = document.querySelector(".result");
    result.textContent = " ";
    for (let i = 0; i < 9; i++){
        gb.display(i, " ");
    }
}

function Player (name, symbol) {
    this.name = name;
    this.symbol = symbol;
}

function gameboard () {
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    this.play = function (i, symbol) {
        this.board[i] = symbol;
    }

    this.check = function () {
        if (this.board[0] !== " " && this.board[0] === this.board[1] && this.board[1] === this.board[2]){
            return "win";
        }

        else if (this.board[3] !== " " && this.board[3] === this.board[4] && this.board[4] === this.board[5]){
            return "win";
        }

        else if (this.board[6] !== " " && this.board[6] === this.board[7] && this.board[7] === this.board[8]){
            return "win";
        }

        else if (this.board[0] !== " " && this.board[0] === this.board[3] && this.board[3] === this.board[6]){
            return "win";
        }

        else if (this.board[1] !== " " && this.board[1] === this.board[4] && this.board[4] === this.board[7]){
            return "win";
        }

        else if (this.board[2] !== " " && this.board[2] === this.board[5] && this.board[5] === this.board[8]){
            return "win";
        }

        else if (this.board[0] !== " " && this.board[0] === this.board[4] && this.board[4] === this.board[8]){
            return "win";
        }

        else if (this.board[2] !== " " && this.board[2] === this.board[4] && this.board[4] === this.board[6]){
            return "win";
        }

        else if (this.board[0] !== " " && this.board[1] !== " " && this.board[2] !== " " && this.board[3] !== " " && 
        this.board[4] !== " " && this.board[5] !== " " && this.board[6] !== " " && this.board[7] !== " " && this.board[8] !== " "){
            return "tie";
        }

        else {
            return "continue";
        }
    }

    this.create = function() {
        let main = document.querySelector(".main");
        let b = document.createElement("div");
        b.classList.add("container");
        for (let i = 0; i < 9; i++){
            let dabba = document.createElement("div");
            dabba.classList.add("box");
            dabba.setAttribute('id', i)
            dabba.textContent = this.board[i];
            b.appendChild(dabba);
        }
        main.appendChild(b);
    }

    this.display = function (i, symbol) {
        let specificDabba = document.getElementById(i);
        specificDabba.textContent = symbol;
    }

    this.gameOver = function (symbol, declaration) {
        let result = document.createElement("div");
        result.classList.add("result")
        let boarad = document.querySelector(".container");
        if (declaration === "win"){
            result.textContent = `${symbol} won!`;
        }
        else{
            result.textContent = `It's a tie!`
        }
        boarad.appendChild(result);
        boarad.classList.add("finished");

        dabbe.forEach((dabba) => {
            console.log("hehe");
            dabba.removeEventListener('click', func);
        });
    }
}

function func (event) {
    if (gb.board[parseInt(event.target.id)] != " "){
        return
    }
    gb.play(parseInt(event.target.id), symbol);
    gb.display(event.target.id, symbol);
    if (gb.check() === "win" || gb.check() === "tie"){
        gb.gameOver(symbol, gb.check());
    }
    if (symbol === 'X'){
        symbol = 'O';
    }
    else {
        symbol = 'X';
    }
}

