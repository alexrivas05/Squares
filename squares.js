let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random()*21)+30;
let topZ = 1;
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
    
    square.onclick = function(){
        if(parseInt(this.style.zIndex) === topZ){
            squareArea.removeChild(this);
        } else {
            topZ++;
            this.style.zIndex = topZ;
        }
    };
    
    let size = parseInt(Math.random()*11)+45;
    square.style.width = size + "px";
    square.style.height = size + "px";

    squareArea.append(square);
    
}

document.getElementById("addBtn").onclick = addSquare;

function changeColor(){
    let allSquares = document.querySelectorAll(".square");
    for(let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}

document.getElementById("changeBtn").onclick = changeColor;