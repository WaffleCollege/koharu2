'use strict'
// Please don't delete the 'use strict' line above

//問題1
/**
 * 引数：arrayOfPeople - 人の名前の配列
 * 返り値： 与えられた配列の長さ
 */
function numberOfPeople(arrayOfPeople) {
    // ここにコードを書きましょう
    return arrayOfPeople.length;
}
  
// テスト
console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"])); // => 4
console.log(numberOfPeople([])); // => 0
  

//問題2
const students = ["koha", "tohji", "akira", "achu", "kinu"];

//テスト
console.log(numberOfPeople(students)); // => 5


//問題3
students.push("gummy");
students.push("ikuto");
students.push("kuni");

//テスト
console.log(numberOfPeople(students)); // => 8


//問題4
/**
 * 引数： array - 配列
 * 返り値： 与えられた配列の最後の要素を返す
 */
function last(array) {
    // ここにコードを書きましょう
    return array[array.length - 1];
}
  
// ここにテストを書いてください
// console.logを使って出力してOK. 意図した答えかを確認しよう
console.log(last(students)); // => kuni

