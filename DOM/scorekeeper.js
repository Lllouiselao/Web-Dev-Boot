var button1 = document.querySelector("#p1");
//two different way to choose the element
var button2 = document.getElementById("p2");
var button3 = document.getElementById("reset");
//this two are for connect to the number in H1 in HTML
var score1 = document.querySelector("#scorep1");
var score2 = document.querySelector("#scorep2")
//this is for another element just count score
var p1score = 0;
var p2score = 0;
//this is for logic if game over or not
var gameOver = false;
//this is for which number game will be over
var winningScore = 5;

button1.addEventListener("click", function(){
    if(!gameOver){   //this means gameOver hasn't been reached
        p1score++;
        if(winningScore === p1score){
            gameOver = true;  // when gameOver is true the whole block cannot been run 
        }
    }
    //console.log(p1score);
    score1.textContent = p1score;
})

button2.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(winningScore === p2score){
            gameOver = true;
        }
    }
    score2.textContent = p2score;
})

button3.addEventListener("click", function(){
    gameOver = false;
    p2score = 0;
    p1score = 0;
})