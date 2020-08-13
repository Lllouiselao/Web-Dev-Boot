//3/6 colors using random function to generate
var colors = generateColor(6);
//selet all the square class into squares
var squares = document.querySelectorAll(".square");
//the color we selected to guess
var colorPicked = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
//thsi is for the guess prompt
var guessPrompt = document.getElementById("prompt");


colorDisplay.textContent = colorPicked;

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
        }
        else{
            this.style.backgroundColor = "#F0F8FF";
            guessPrompt.textContent = "Try Again";
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