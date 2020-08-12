var button1 = document.querySelector("#p1");
//two different way to choose the element
var button2 = document.getElementById("p2");
var button3 = document.getElementById("reset");
//this two are for connect to the number in H1 in HTML
var score1 = document.querySelector("#scorep1");
var score2 = document.querySelector("#scorep2");
//this is for when we using input score the winningScore will change
var numInput = document.querySelector("input"); 
var winningScoreDisplay = document.querySelector("p span");
//this is for element just count score doens't affect the display
var p1score = 0;
var p2score = 0;
//this is for logic if game over or not
var gameOver = false;
//this is for which number game will be over
var winningScore = 5;

button1.addEventListener("click", function(){
    if(!gameOver){   //this means gameOver hasn't been reached
        p1score++;
        if(p1score === winningScore){
            scorep1.classList.add("winner");
            gameOver = true;  // when gameOver is true the whole block cannot been run 
        }
    }
    //console.log(p1score);
    score1.textContent = p1score;
});

button2.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(winningScore === p2score){
            scorep2.classList.add("winner");
            gameOver = true;
        }
    }
    score2.textContent = p2score;
});

button3.addEventListener("click", function(){
    reset();
});

function reset(){
    gameOver = false;//this is help to set the gameover to be false and we could play again
    p2score = 0;//this only set the javascript to 0 but not display
    p1score = 0;
    scorep1.textContent = 0; //this set the score display to 0
    scorep2.textContent = 0;
    scorep1.classList.remove("winner");//this is for remove the green (winner) class
    scorep2.classList.remove("winner");
    gameOver = false;
};

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;//use this to referral to the thing we are listening to which is numInuput
    winningScore = Number(this.value);
    reset();//if we change the number during the game it will help us reset all the number
});