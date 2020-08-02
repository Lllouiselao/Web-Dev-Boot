//this had to be outside everything this had to be the global scope
var todos = [];

window.setTimeout(function() {
    // put all of your JS code from the lecture here

var userChoice = prompt("What would you like to do?");
while(userChoice !== "quit"){
    if (userChoice === "list"){
        checkList();   
    }
    else if (userChoice === "new"){
        addList();
    }
    else if (userChoice === "delete"){
        deleteList();                                                                                  
    }        
    userChoice = prompt("What would you like to do?");
}
console.log("Okay bye")
  }, 500);

function checkList(){
    console.log("***************");
        //the first forEach is the thing iterating in the loop
        // and second i is the index of the thing
        todos.forEach(function(things, i){
            console.log(i + ": " + things);
        });
        console.log("***************");
}

function addList(){
    var userList = prompt("What you wanna add?");
        todos.push(userList);
}

function deleteList(){
    var userIndex = prompt("What Index you wanna delete?");  
        //using str.splice() the first element is for which index
        //the second number is for how many number you wanna delete\
        todos.splice(userIndex,1);
        alert("Item Deleted");
}
