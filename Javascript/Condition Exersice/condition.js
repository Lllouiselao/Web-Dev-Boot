userAge = Number(prompt("Pleas tell me your age"));

if(userAge <0){
    console.log("Error!");
    alert("That's not true");
}

if(userAge === 21){
    console.log("Hapy 21st Birthday!");
    alert("Hapy 21st Birthday!");
}
if(userAge %2 !==0 ){  
    console.log("Your Age is odd!");
    alert("Your Age is odd!");
}
if(&& userAge % (Math.sqrt(userAge)===0)){
    console.log("Perfect Square!");
    alert("Perfect Square!");
}
