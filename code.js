// var rows = window.innerHeight;
// var cols = window.innerWidth;
var rows = 24;
var cols = 24;

var playing = true;

// init
function initialize(){
    createTable();
}

// lay out the board
function createTable(){
    var gridContainer = document.getElementById("gridContainer");
    if (!gridContainer) {
        //throw error
        console.error("Problem: no div for the grid table!");
    }
    var table = document.createElement("table"); // creates element using the 'table' standard

    for (var i = 0; i < rows; i++){
        var tr = document.createElement("tr"); // tr is table row
        for (var j = 0; j < cols; j++){
            var cell = document.createElement("td"); // td table data
            cell.setAttribute("id", i + "_" + j); // each cell gets a unique ID
            cell.setAttribute("class", "dead"); // set correct CSS class dead/alive
            cell.onclick = cellClickHandler; // handles the clicks
            tr.appendChild(cell); // appends child
        }
        table.appendChild(tr); // appends child
    }
    gridContainer.appendChild(table);
}

function cellClickHandler(){
    var classes = this.getAttribute("class");
    if (classes.indexOf("live") > -1) {
        this.setAttribute("class", "dead");
    } else {
        this.setAttribute("class", "live");
    }
}

// Start everything
window.onload = initialize;