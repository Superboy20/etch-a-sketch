const container = document.querySelector("#container");
const reset = document.getElementById("reset");
const randomColors = document.getElementById("randomColors");
const eraser = document.getElementById("eraser");
const draw = document.getElementById("draw");
const generate = document.getElementById("generate");

 
let cellNumber = 0;
let cells = 0;

function initialGrid(cellNumber) {

    
    container.style.gridTemplateColumns = `repeat(${cellNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${cellNumber}, 1fr)`;
    
    for (i = 0; i < cellNumber; i++) {
        for (j = 0; j < cellNumber; j++) {
            const cell = document.createElement("div");           
                cell.classList.add('cell');
                container.appendChild(cell);
            cell.onmouseover = () => cell.style.backgroundColor = 'black';
        }
    }
    cells = document.querySelectorAll(".cell");
}
initialGrid(16);

function randomColor(cell) {
    cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
                                    ${Math.floor(Math.random() * 255)},
                                    ${Math.floor(Math.random() * 255)})`;
}

generate.addEventListener('click', () => {
        container.textContent = '';
        let cellNumber = prompt("How many squares do you want? Please choose a number between 1 and 75.");
        while (cellNumber < 1 || cellNumber > 75 || isNaN(cellNumber)) {
            cellNumber = prompt("Please choose a number between 1 and 75.")
        }
        initialGrid(cellNumber);
 });
 
 reset.addEventListener('click', () => {
     container.textContent = '';
     initialGrid(16);
 });

eraser.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.onmouseover = () => cell.removeAttribute("style");
    });
});

draw.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.onmouseover = () => cell.style.backgroundColor = 'black';
    });
});

randomColors.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.onmouseover = () => randomColor(cell);
    });
});