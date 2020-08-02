var number = -10;
console.log("Print all numbers between -10 and 19");
while(number < 20){
    console.log(number);
    number++;
}

var number = 10;
console.log("Print all even numbers between 10 and 40");
while(number < 41){
    if(number % 2 ===0)
    console.log(number);
    number++;
}

var number = 300;
console.log("Print all odd numbers between 300 and 333");
while(number<334){
    if(number %2 !==0){
        console.log(number);
    }
    number++;
}

var number = 5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while(number <51){
    if(number % 5 === 0 && number % 3 ===0){
        console.log(number);
    }
    number++;
}