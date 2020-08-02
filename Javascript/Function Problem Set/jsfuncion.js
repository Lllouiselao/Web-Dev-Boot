function isEven(userNumber){
    return userNumber%2 ===0;
}

//factorial 5 *4 *3 * 2 *1 
function factorial(userNumber){
    var userSum =1;
    for(var i = 2; i <=userNumber; i++){
        userSum = i *userSum;
    }
    return userSum;
}

//replace "-" with "_"
function kebabToSnake(userString){
    var str = userString;
    var res = str.replace(/-/g, "_");
    return res;
}