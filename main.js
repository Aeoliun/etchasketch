let width = 16;
let pixels = width * width;

const gridContainer = document.querySelector(".grid-container");

/*
Allows the user to draw
*/
gridContainer.addEventListener("mouseover", function(e) {
    randomColor = 'black';
    e.target.style.backgroundColor = `${randomColor}`;
});

function drawGrid(width, pixels) {
    gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${width}, 1fr)`;
    
    for (i = 0; i < pixels; i++) {
        const gridPixel = document.createElement("div");
        gridPixel.className = "square";
        gridContainer.appendChild(gridPixel);
    }
}

drawGrid(width, pixels);

function reset() {
    const blank = document.querySelectorAll(".square");
    blank.forEach(function(item) {
        item.style.backgroundColor = "crimson";
    });

    width = prompt("Pixels?");
    pixels = width * width;

    drawGrid(width, pixels);

    console.log(width, pixels);
}