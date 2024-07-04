
function saveValueAndCreateGrid() {
    const gridSize = document.getElementById('gridSize').value;
    console.log(gridSize); // Log the grid size to the console
    clearGrid();
    createGrid(gridSize);
}



function createGrid(gridSize) {
    const container = document.querySelector("#container");
    for (let i = 0; i < gridSize; i++) { // 16x16 grid
        const column = document.createElement("div");
        column.classList.add("column");
        for (let i = 1; i < gridSize; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.backgroundColor = "black";
            row.addEventListener("mouseover", () => {
                row.style.backgroundColor = "red";
            })
            column.append(row);

        }
        container.append(column);
    }
}
function clearGrid() {
    const container = document.querySelector("#container");
    container.innerHTML = '';  // Clear previous grid
}



const divs = container.querySelectorAll("div");
