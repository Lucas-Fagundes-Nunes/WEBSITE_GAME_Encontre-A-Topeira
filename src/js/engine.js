let states = {
    view: {
        board: document.getElementById("board"),
        score: document.getElementById("score"),
        textScore: document.getElementById("text-score"),
        divScore: document.getElementById('div-score'),
    },
    results: {
        score: 0,
        gameOver: false,
    },
    currMoleTile: '',
    currPlantTile: '',
}

window.onload = function () {
    setGame();
}

function playAudio(nameAudio) {
    let audio = new Audio(`./src/audios/${nameAudio}`);
    audio.volume = 0.2;
    audio.play();
}

function setPlant() {
    if (states.results.gameOver) {
        return;
    } 

    if (states.currPlantTile) {
        states.currPlantTile.innerHTML = "";
    }
    
    let plant = document.createElement("img");
    plant.src = "./src/images/piranha-plant.png";

    let num = getRandomTile();

    if (states.currMoleTile && states.currMoleTile.id == num) {
        return;
    }

    states.currPlantTile = document.getElementById(num);
    states.currPlantTile.appendChild(plant)
}

function getRandomTile () {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (states.results.gameOver) {
        return;
    } 

    if (states.currMoleTile) {
        states.currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./src/images/monty-mole.png";

    let num = getRandomTile();

    if (states.currPlantTile && states.currPlantTile.id == num) {
        return;
    }

    states.currMoleTile = document.getElementById(num);
    states.currMoleTile.appendChild(mole)
}

function selectTile() {
    if (states.results.gameOver) {
        return;
    } 

    if (this == states.currMoleTile) {
        playAudio('hit.m4a');
        states.results.score ++
        states.view.score.innerHTML = states.results.score.toString();
    } else if (this == states.currPlantTile) {
        playAudio('gameover.mp3');
        states.view.textScore.innerText = "GAME OVER";
        states.view.score.innerHTML = states.results.score.toString();
        states.results.gameOver = true;
        states.view.divScore.classList.add('div-score');
    }
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener('click', selectTile);
        states.view.board.appendChild(tile)
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 2000)
}
