// Crée la grille en fonction du nombre entré
function createGrid(number) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 1; i <= number*number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-box")
        gridContainer.appendChild(div);
    }
    document.querySelector(".grid-dimensions").textContent = `${number}x${number}`;
}

// Change la couleur
function changeColor(event){
    event.target.style.backgroundColor = "black";
}

// Réinitialise la grille en entrant un nouveau nombre
function resetGrid(){
    let num = prompt("Entre un nombre plus petit ou égale à 100 pour paramétrer la taille de la grille :");
    if (num === undefined || num === null || num === "") {
        return;
    }

    while (num > 100){
        num = prompt("Nombre trop grand ! Entre un nombre plus petit ou égal à 100 :");
    }

    const gridContainer = document.querySelector(".grid-container");
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(num);
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
}

// Efface la grille
function clearGrid(){
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
}

// Grille de base
let gridNumber = 16;
createGrid(gridNumber);
let gridBoxList = document.querySelectorAll(".grid-box");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});