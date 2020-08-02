
function printReverse(userString){
    //length is always 1 greater than the index 
    for(var i = userString.length-1; i>=0 ; i--){
        console.log(userString[i]);
    }

}


function isUniform(userString){
    var firstItem = userString[0];
    for(var i = 1; i<userString.length; i++){
        if(userString[i] !== firstItem){
            return false;
        }
    }
    return true;
}


function sumArray(userString){
    var sum = 0;
    userString.forEach(function(numbers) {
        sum += numbers;
    });
    return sum;
}

function max(userString){
    var bigNumber = userString[0];
    //we could start at 1 because bigNumber we 
    //already set it to first element
    for(i =1; i < userString.length; i++){
        var currentNumber = userString[i];
        if (currentNumber > bigNumber){
            bigNumber = currentNumber;
        }
    }
    return bigNumber;
}