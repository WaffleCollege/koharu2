'use strict'
// Please don't delete the 'use strict' line above

//テスト関数
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

//問題1
//関数 abs を宣言してください。
//この関数は .map メソッドに実行されているという点に注目してください。
//なお、関数abs内で .map メソッドを使用してはいけません。

/**
 * @param {number} 整数の配列
 * @returns {number} 与えられた引数の絶対値
 */
// ここにコードを書きましょう

function abs(num){
    if(num > 0){
        return num;
    }else{
        return (-1)*num;
    }
}

test([1, 2, 3].map(abs), [1, 2, 3]);
test([-1, -2, -3].map(abs), [1, 2, 3]);
test([-1, 2, -3].map(abs), [1, 2, 3]);

//問題2
// 関数 getIncrementedNumbers を宣言してください。
// この関数では .map メソッドを使用してください。
// ヘルパー関数（この関数を補助する関数）を書く必要があるかもしれませんが、無名関数で書いてもかまいません。

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
 */
// ここにコードを書きましょう
function getIncrementedNumbers(numArr){
    return numArr.map((num) => {
        return num + 1;
    });
}

test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);
// 元の配列が変更されていないことを確認してください
test(array1, [0, 0, 0]);

//問題3
// 関数 getSwitched を宣言してください。
// この関数は .map メソッドを使用してください。
// ヘルパー関数を書く必要があるかもしれませんが、無名関数を使って書いてもかまいません。

/**
 * @param {Array<number|string>} ???
 * @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
 */
// ここにコードを書きましょう
function getSwitched(arr){
    return arr.map((ele) => {
        if(typeof ele === 'string'){ //文字列型だったら
            return Number(ele);
        }else{ //数値型だったら
            return String(ele);
        }
    });
}

test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);