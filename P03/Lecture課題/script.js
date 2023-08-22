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
//actual = /* テストを行う EXPRESSION（式）を定義する */
//expected = /* EXPRESSION（式）の期待値を定義する */

// testを呼び出す
//test(actual, expected);


//問題1,2
function isEven(num){
    if(typeof num != 'number'){
        return "This is not a number.";
    }
    else {
        return num % 2 === 0;
    }

}

actual = isEven(5);
expected = false;
test(actual,expected);

actual = isEven(6);
expected = true;
test(actual,expected);

actual = isEven("aaa");
expected = "This is not a number.";
test(actual,expected);



//console.log(isEven(4)); // => true
//console.log(isEven(7)); // => false
//console.log(isEven("aaa")); // => "This is not a number."

//問題3
/**
 * 引数1つ目:  ??? - 配列
 * 引数2つ目:  ??? - 配列の最後に追加する値
 * 返り値： 処理後の配列の長さを返す。与えられた配列の末尾に、第2引数で渡された要素を追加してください。
 */

// ここにコードを書きましょう
function push(array,num){
    let i = array.length;
    array[i] = num;
    return i+1;
}

let array = [1, 2, 3, 4];

// 関数が正しい結果を返すことを確認する
//console.log(push(array, 5)); // => 5
//console.log(push(array, 10)); // => 6



actual = push(array,5);
expected = 5;
test(actual,expected);

actual = push(array,10);
expected = 6;
test(actual,expected);

// 配列が正しく変更されていることを確認する
console.log(array);
// => [1, 2, 3, 4, 5, 10];　　
