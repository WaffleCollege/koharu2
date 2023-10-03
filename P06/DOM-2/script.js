'use strict'
// Please don't delete the 'use strict' line above

//問題1
const p = document.querySelectorAll("p");
console.log(p);

//問題2
const mainHeader = document.getElementById("main-header");

//問題3
//const inpar = document.querySelectorAll(".inner-paragraph");
//for(const element of inpar){
//    console.log(element);
//}

//問題3-1
function toUpperCaseString(inputString) {
    // 文字列を大文字に変換して返す
    return inputString.toUpperCase();
}

// テストケース
const input = "Hello, World!";
const result = toUpperCaseString(input);
console.log(result); // "HELLO, WORLD!"

function convertTextToUpperCase(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        element.textContent = element.textContent.toUpperCase();
    });
}

// テストケース: すべての <p> 要素内のテキストを大文字に変換する
convertTextToUpperCase("p");
