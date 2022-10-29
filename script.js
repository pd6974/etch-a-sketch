//variables to help me make the grid
const container = document.querySelector('.container');
makeGrid();

//function to build grid
function makeGrid() {
    for (let i = 0; i < 256; i++) {
            const gridDiv = document.createElement('div');
            container.appendChild(gridDiv);
            gridDiv.classList.add('gridDiv');
    }
}

//create nodelist of divs in the grid
const squares = document.querySelectorAll("div.gridDiv");

//add hover event listener to each div
squares.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue';
    });

});

const gridButton = document.querySelector('.gridButton');

let dim = 0;

//event listener to build grid
gridButton.addEventListener('click', getDimension);

function getDimension() {
    dim = prompt("What dimension would you like to set to the grid? (Max of 100)");
    dim = Number(dim);
    loopDim = dim * dim;

    container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;

    if (dim > 0 && dim <= 100) {
        const oldSquares = document.querySelectorAll("div.gridDiv");

        oldSquares.forEach((div) => {
            div.remove();
        })

        for (let i = 0; i < loopDim; i++) {
            const gridDiv = document.createElement('div');
            container.appendChild(gridDiv);
            gridDiv.classList.add('gridDiv');
    }

    const newSquares = document.querySelectorAll('gridDiv')

    newSquares.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'blue';
        });
    
    });

    }

    
}


