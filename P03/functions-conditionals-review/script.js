'use strict'
// Please don't delete the 'use strict' line above

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

// 上の問題のように、関数testにチェックする内容を全てまとめる
function test(actualExpression, expectedExpression){
    if (actualExpression === expectedExpression) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actualExpression);
        console.log("  expected: ", expectedExpression);
    }
}
actual = /* テストを行う EXPRESSION（式）を定義する */
expected = /* EXPRESSION（式）の期待値を定義する */

// testを呼び出す
test(actual, expected);

//問題1
/**
 * 引数①: {string} ??? - テストの対象となる文字列
 * 引数②: {number} ??? - 閾値
 * 返り値： 与えられた文字列の長さが指定された閾値より長いかどうか
 */
// ここにコードを書きましょう
function isLongerThan(string, number){
    if(string.length > number){
        return true;
    } else {
    return false;
    }
}

actual = isLongerThan("three", 3);
expected = true;

// testを呼び出す
test(actual, expected);

actual = isLongerThan("three", 5);
expected = false;

// testを呼び出す
test(actual, expected);

actual = isLongerThan(3, 5);
expected = "Invalid input.";

// testを呼び出す
test(actual, expected);


//問題2
/**
 * 引数: { number }??? - テストの対象となる数値
 * 返り値:  与えられた数値が奇数かどうかを表すブーリアン
 */
// ここにコードを書きましょう
function isOddWithoutIf(number2){
    return Number.isInteger((number2 + 1) / 2);
}

actual = isOddWithoutIf(3);
expected = true;

// testを呼び出す
test(actual, expected);

actual = isOddWithoutIf(4);
expected = false;

// testを呼び出す
test(actual, expected);

actual = isOddWithoutIf("abc");
expected = true;

// testを呼び出す
test(actual, expected);


//問題3
/**
 * 引数: ??? - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * 返り値:  {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
 */
const numList = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
// ここにコードを書きましょう
function getSimpleNumberName(number3){
    if(number3 >= 0 && number3 < 11){
        return numList[number3];
    } else {
       return "false"; 
    }
}

actual = getSimpleNumberName(0);
expected = "zero";

// testを呼び出す
test(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください
actual = getSimpleNumberName(99);
expected = "input 0-,-10";

test(actual, expected);


//問題4
/**
 * 引数:  ??? - 正多角形の辺の数 (3-8)
 * 返り値:  {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
 */
// ここにコードを書きましょう
const EgdgeNum = ["triangle","square","pentagon","hexagon","heptagon","octagon"];
function getRegularConvexPolygonName(number4){
    if (number4>=3 && number4<= 8){
        return EgdgeNum[number4 - 3];
    } else {
        return "input number(3-,-8)";
    }
}

actual = getRegularConvexPolygonName(3);
expected = "triangle";

// testを呼び出す
test(actual, expected)

// さらにテストを書いて、コードが正しいことを確認してください

actual = getRegularConvexPolygonName(8);
expected = "octagon";

// testを呼び出す
test(actual, expected)



//問題5-1
function randomNumber(number){
    return Math.random()*number;
}
console.log(randomNumber(8));

let num;
//問題5-2
function guessMyNumber(number){
    num = Math.random()*5;
    if(number === num){
        return "Yes!";
    } else {
        return "No!";
    }
}
console.log(guessMyNumber(10));
console.log("ランダムな整数は: " + num);
