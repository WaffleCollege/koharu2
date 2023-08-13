'use strict'
// Please don't delete the 'use strict' line above

//問題1
function add(numOne, numTwo) {
  return numOne + numTwo;
}
//問題２
// テスト
console.log(add(4, 3)); // 7 を表示
console.log(add(100, 42)); // => 142
console.log(add(100)); // => Nanが出力された
console.log(add(1,4,5)); // => 前の2数の和が出力された

//問題3
function simpleFunctionA() {
    return "Hello simple function A";
}
  
function simpleFunctionB() {
    console.log("Hello simple function B");
}

console.log(simpleFunctionA(), "--> From running Simple Function A");
console.log(simpleFunctionB(), "--> From running Simple Function B");

//問題4
function average(num1,num2){
    return (num1+num2)/2;
}

console.log(average(3,6)); // => 4.5
console.log(average(100,4)); // => 52
console.log(average("こはる",3)); // => Nan

//問題5
function square(x) {
    return x * x;
}
console.log(square(5));

//問題6
function Square(monkey) {
    return monkey ** 2;
}

//問題7
function cube(x) {
    return x**3;
}
console.log(cube(2));

//問題8
function waffleMaker(topping) {
    return (topping + " Waffle");
}

// テスト
console.log(waffleMaker("Apple")); // => Apple Waffle
console.log(waffleMaker("Honey")); // => Honey Waffle

//問題9
function area(radius){
    return radius * radius * Math.PI;
}
console.log(area(2)); // => 12.5663706144...
console.log(area(5)); // => 78.5398163397...

//理解度チェック
//1. 少ない時:エラーとなる
//   多い時:実引数のうち、溢れた引数が無視される
//2. 関数の終了、また終了時に返される値を指す。関数の外側で使うことはできない。

//問題10
function simpleHelloA() {
    console.log("hello");
}
  
function simpleHelloB() {
    return "hello";
}
  
const a = simpleHelloA(); 
const b = simpleHelloB();
console.log(a, b); // => "hello"

//問題11
function createGreeting(greetingPhrase, instructorName) {
    return greetingPhrase + ", " + instructorName + "!";
}
const morningGreeting = createGreeting("Good morning","Mike");
const dayGreeting = createGreeting("Hello","Beau");
const eveningGreeting = createGreeting("Good evening","Alex");
  
console.log(morningGreeting); //"Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Beau!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示