'use strict'
// Please don't delete the 'use strict' line above

//問題1
function simplePasswordLock(password) {
  if (password === "password") {
    return "Correct! Welcome.";
  }
  return "Incorrect password, please try again.";
}
//テスト
console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."



//問題2
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);
//空白も文字として認識している！

//問題3
function isItTooLong(string){
    if (string.length > 10) {
        return true;
    } else {
        return false;
    }
}
//テスト
console.log(isItTooLong("apple")); // => "false"
console.log(isItTooLong("Square Wheel")); // => "true"
console.log(isItTooLong("Love Drum!")); // => "false"


//問題4
function biggerNumber(numOne, numTwo) {
    if (numOne > numTwo) {
        return "The first argument is bigger.";
    }
    else if (numOne === numTwo) {
        return "The both are the same.";
    }
    else {
        return "The second argument is bigger."
    }
}

//テスト
console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'
console.log(biggerNumber(3, 3)); // => 'The both are the same.'


//問題5
const Languages = ["Japanese", "English", "Chinese", "French"];
const GreetMessages = ["Konnichiwa", "Hello", "Ni Hao", "Bonjour"];
let i = 0;
function greeting(name, language){
    while(i<4){
    if (language === Languages[i]) {
    let message = GreetMessages[i] + ", " + name + "!";
    return message;
    }
    i++;
}
}

//テスト
console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
console.log(greeting("koharu", "Chinese")); // "Ni Hao, koharu!" が表示されるようにする。
console.log(greeting("koharu", "French")); // => "Bonjuor, koharu!"


