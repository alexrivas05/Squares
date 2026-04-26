let squareArea = document.querySelector("#squarearea");
// let squareArea = document.getElementById("squarearea");
let squareCount = parseInt(Math.random()*21)+30; //30-50
//make some variable for really big index
for(let i = 0; i<squareCount;i++){
    addSquare();
}

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color+=letters.charAt(parseInt(Math.random()*letters.length));
    }

    return color;
}

function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random()*650)+"px";
    square.style.top = parseInt(Math.random()*250)+"px";
    square.style.backgroundColor = getRandomColor();
    squareArea.append(square);
}

document.getElementById("addBtn").onclick = addSquare;

//Make a function that changes all the colors of all the squares
//Make sure the button calls it
function changeColor(){
    let allSquares = document.querySelectorAll(".square");
    for(let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}

document.getElementById("changeBtn").onclick = changeColor;