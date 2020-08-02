
console.log("Print all numbers between -10 and 19");
for(var number = -10; number < 20; number++ ){
    console.log(number);
}


console.log("Print all even numbers between 10 and 40");
for(var number = 10; number<41; number++){
    if(number % 2 ===0)
    console.log(number);
}

var number = 300;
console.log("Print all odd numbers between 300 and 333");
for(var number= 300; number <334; number++){
    if(number %2 !==0){
        console.log(number);
    }
}

var number = 5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for(var number = 5; number<51; number++){
    if(number % 5 === 0 && number % 3 ===0){
        console.log(number);
    }
}