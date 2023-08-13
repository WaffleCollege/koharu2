'use strict'
// Please don't delete the 'use strict' line above

//問題1
console.log(2 * 3 * 10 > 50);

//問題2
function isEqual(valueOne, valueTwo) {
    return valueOne == valueTwo;
  }
  
  console.log(isEqual(123, "123"));

//問題3
function isGreaterThan(valueOne, valueTwo) {
    if(valueOne > valueTwo){
        return true;
    }
    else {
        return false;
    }
}
console.log(isGreaterThan(1000,500)); //true
console.log(isGreaterThan(1000,5000)); //false

//問題4
function isOfAge(num){
    if(num >= 20){
        return true;
    }
    else {
        return false;
    }
}
console.log(isOfAge(20));
console.log(isOfAge(17));
console.log(isOfAge(80));

//問題5
function isEven(n){
    if(num2%2 == 1) { //奇数
        return false;
    }
    else {
        return true;
    }
}
console.log(isEven(12));
console.log(isEven(1));

//問題6
//円錐の体積、表面積
function volume(ridius,height){
    return Math.PI * ridius * ridius * height /3;
}

function surface_area(ridius,height){
    return Math.PI * ridius * (ridius**2 + height**2)**(1/2);
}
console.log(volume(3,5)); // => 47.12388980...
console.log(surface_area(3,5)); // => 54.955427...

//問題7
function validCredentials (username,password){
    //十分な長さを7とする
    if ((username > 7)&&(password > 7)){
        return true;
    }
    else {
        return false;
    }
}
console.log(validCredentials(8,10)); // => true
console.log(validCredentials(8,2)); // => false

//問題8
function isEven2(num2){
    if(num2 & 1) { //奇数
        return false;
    }
    else {
        return true;
    }
}
console.log(isEven2(12));
console.log(isEven2(1));

//問題9
function isOfAge2(num2){
    if(num2 >= 20){
        console.log("成人！お酒を飲めます！！");
        return true;
    }
    else {
        console.log("未成年！お酒は飲めません！！");
        return false;
    }
}
console.log(isOfAge2(20));
console.log(isOfAge2(17));
console.log(isOfAge2(80));