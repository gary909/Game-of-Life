// var rows = window.innerHeight;
// var cols = window.innerWidth;
var rows = 24;
var cols = 24;

var playing = false // track if game is running

var grid = new Array(rows);
var nextGrid = new Array(rows)

function initializeGrids() {
    for (var i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}

function resetGrids() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++){
            grid[i][j] = 0;
            nextGrid[i][j] = 0;
        }
    }
}

// init
function initialize(){
    createTable();
    initializeGrids();
    resetGrids();
    setupControlButtons();
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
    var rowcol = this.id.split("_");
    var row = rowcol[0];
    var col = rowcol[1];

    var classes = this.getAttribute("class");
    if (classes.indexOf("live") > -1) {
        this.setAttribute("class", "dead");
        grid[row][col] = 0;
    } else {
        this.setAttribute("class", "live");
        grid[row][col] = 1;
    }
}

function setupControlButtons() {
    // button to start
    var startButton = document.getElementById("start");
    startButton.onclick = startButtonHandler;

    // button to clear
    var clearButton = document.getElementById("clear");
    clearButton.onclick = clearButtonHandler;
}

// clear the grid
function clearButtonHandler(){
    console.log("Clear the game: stop playing, clear the grid");
    playing = false;
    var startButton = document.getElementById("start");
    startButton.innerHTML = "start";
}

// start/pause/continue the game
function startButtonHandler() {
    if (playing) {
        console.log("Pause the game");
        playing = false;
        this.innerHTML = "continue";
    } else {
        console.log("Continue the game");
        playing = true;
        this.innerHTML = "pause";
        play();
    }
}

// Run the game
function play() {
    console.log("Play the game");
}


// Start everything
window.onload = initialize;