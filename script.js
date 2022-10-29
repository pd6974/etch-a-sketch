//variables & functions to help me make the grid
const container = document.querySelector('.container');
makeGrid();

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
        e.target.style.backgroundColor = 'darkgreen';
    });

});


//button to let user set a grid dimension
const gridButton = document.querySelector('.gridButton');

let dim = 0;

//event listener to build grid
gridButton.addEventListener('click', () => {
    getDimension();
});

//function gets dimension and builds the grid
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
            gridDiv.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'darkgreen';
            }); 
    }

    }
    
}



