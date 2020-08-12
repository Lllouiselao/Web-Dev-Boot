var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
//selet all the square class into squares
var squares = document.querySelectorAll(".square");
//the color we selected to guess
var colorPicked = colors[3];
var colorDisplay = document.getElementById("colorDisplay");


colorDisplay.textContent = colorPicked;

for(var i = 0; i < squares.length; i++){
    //add init color to all squares
    squares[i].style.backgroundColor = colors[i];
    
    //add squares listener to square
    squares[i].addEventListener("click", function(){
        //grab color of the clicked one and compare to the picked 
        let colorChoose = this.style.backgroundColor;
        if(colorChoose === colorPicked){
            alert("You are right");
        }
        else{
            alert("Try again");
        }
    });
}