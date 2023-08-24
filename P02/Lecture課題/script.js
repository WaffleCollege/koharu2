'use strict'
// Please don't delete the 'use strict' line above


//問題1
function getGreaterValue(num1,num2){
    if(num1>=num2){
        return num1;
    }
    else {return num2;}
}

console.log(getGreaterValue(10, 15)); // 15 を表示
console.log(getGreaterValue(15, 10)); // 15 を表示

//問題2
function getGreatestValue(...value){
    return Math.max(...value);
}

console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示

//問題3
function validCredentials(password){
    
}
console.log(validCredentials("abc123"));
