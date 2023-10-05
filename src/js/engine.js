let states = {
    view: {
        board: document.getElementById("board"),
        score: document.getElementById("score"),
    }
}
let currMoleTile;

window.onload = function () {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();

        states.view.board.appendChild(tile)
    }

    setInterval(setMole, 2000);
}

function getRandomTile () {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./src/images/monty-mole.png";

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole)
}