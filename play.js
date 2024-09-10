let ctx;
let killsText = document.querySelector("#gameInfo");
let resetBtn = document.querySelector("#resetBtn");
let surface = document.querySelector("#surface");
let secondChar = "brown";
let SeCharB = "black";
let box = "green";
let unitSize = 25;
let running = false;
let xSpeed = unitSize;
let ySpeed = 0;
let boxX;
let boxY;
let kills = 0;


function setup() {
    let canvas = document.getElementById("surface");
    ctx = canvas.getContext("2d");
    drawKirby(675,360);
}
//1035 middle of canvas
let gameWidth = canvas.width;
let gameHeight = canvas.height;

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function layoutBoxes(){};
function changeDirection(){};
function displayGameOver(){};
function resetGame(){};

//Character
function drawKirby(x,y) {
    // Hands
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.arc(15, -9, 7, 0,2* Math.PI);
    ctx.stroke();
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.arc(-15, -9, 7, 0,2* Math.PI);
    ctx.stroke();
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.restore();
    // Kirby
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "Pink";
    ctx.fill();

    // Eyes
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.rect(x + 2, y - 10, 3, 10);
    ctx.rect(x - 5, y - 10, 3, 10);
    ctx.fill();

    // Shoes
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 4);
    ctx.arc(0, 14, 7, 0, Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 4);
    ctx.arc(0, 14, 7, 0, Math.PI); 
    ctx.stroke();
    ctx.fillStyle = "red"; 
    ctx.fill(); 
    ctx.restore();

    
}