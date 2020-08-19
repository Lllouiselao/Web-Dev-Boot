//help us to count how many colors we need
var numSquares = 6
//3/6 colors using random function to generate
var colors = generateColor(numSquares);
//selet all the square class into squares
var squares = document.querySelectorAll(".square");
//the color we selected to guess
var colorPicked = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
//thsi is for the guess prompt
var guessPrompt = document.getElementById("prompt");
//select the whole h1
var h1 = document.querySelector("h1");
//for the new game button
var newgameButton = document.getElementById("newGame");
//select the difficulty btn
var easyMode = document.getElementById("easyMode");
var hardMode = document.getElementById("hardMode");

//
easyMode.addEventListener("click", function(){
    easyMode.classList.add("seleted");
    hardMode.classList.remove("seleted");
    h1.style.backgroundColor = "steelblue";
    numSquares = 3;
    //we need to generate new colors and it's easy mode 
    //we only need 3 of them
    colors = generateColor(numSquares);
    //select a new random color 
    colorPicked = randomColor();
    //show the picked color on h1
    colorDisplay.textContent = colorPicked;
    //input the colors into the squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardMode.addEventListener("click", function(){
    hardMode.classList.add("seleted");
    easyMode.classList.remove("seleted");
    h1.style.backgroundColor = "steelblue";
    numSquares = 6;
    colors = generateColor(numSquares);
    //select a new random color 
    colorPicked = randomColor();
    //show the picked color on h1
    colorDisplay.textContent = colorPicked;
    //input the colors into the squares
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            //let all the squares shows color
            squares[i].style.display = "block";
    }
});

//shows the picked color 
colorDisplay.textContent = colorPicked;

//if we want a new game 
newgameButton.addEventListener("click", function(){
    //generate new colors
    colors = generateColor(numSquares);
    //select a new random color 
    colorPicked = randomColor();
    //show the picked color on h1
    colorDisplay.textContent = colorPicked;
    //change colors to the 6 squares
    for(var i = 0; i < squares.length; i++){
        //add init color to all squares
        squares[i].style.backgroundColor = colors[i];
    }
    //change the h1 background color to the normal 
    h1.style.backgroundColor = "steelblue";
    newgameButton.textContent = "New Colors";
    guessPrompt.textContent = "";
});

for(var i = 0; i < squares.length; i++){
    //add init color to all squares
    squares[i].style.backgroundColor = colors[i];
    
    //add squares listener to square
    squares[i].addEventListener("click", function(){
        //grab color of the clicked  
        let colorChoose = this.style.backgroundColor;
        //compare to the pick one
        if(colorChoose === colorPicked){
            guessPrompt.textContent = "Correct!";
            changeColor(colorChoose);
            h1.style.backgroundColor = colorPicked;
            newgameButton.textContent = "Play Again";
            
        }
        else{
            this.style.backgroundColor = "#708090";
            guessPrompt.textContent = "Try Again?";
        }
    });
}

//when user click the right one then every squares will change to the one
function changeColor(pickedcolor){
    //loop all squares
    for(var i = 0; i< squares.length; i++){
    //change each color of the squares to the right one
    squares[i].style.backgroundColor = pickedcolor;
    }
    
}

//this is to randomColors when the game starts
function randomColor(){
    //pick a random number this will help us 
    let randomNumber = Math.floor(Math.random()* colors.length);
    //use the random number to access the array's color 
    return colors[randomNumber];
}

//this is for generate random color each time 
function generateColor(num){
    //make an array
    var arr = [];
    //add num random color in to the array why is num bc we have ez and diff two types
    //which means we need to repeat num times 
    for (var i = 0; i < num; i++){
        arr.push(getRandom());
        //get random color and push it into arr
    }
    //return the array
    return arr;
}

function getRandom(){
    //pick red from 0-255
    let red = Math.floor(Math.random()*256);
    //pick green from 0-255
    let green = Math.floor(Math.random()*256);
    //pick blue from 0-255
    let blue = Math.floor(Math.random()*256);
    //then we need to push into specific rgb pattern rgb(r, g, b)
    return "rgb(" + red +", " + green +", " + blue +")";
}