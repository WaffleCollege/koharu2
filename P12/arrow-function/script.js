'use strict'
// Please don't delete the 'use strict' line above

// test
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
// 関数 isMultipleOfTen を宣言してください。
// この関数は .filter メソッドに実行されているという点に注目してください。
// なお、関数 isMultipleOfTen 内で .filter メソッドを使用しては いけません。

/**
 * @param {number} ???
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
// ここにコードを書きましょう
function isMultipleOfTen(num){
    return num % 10 === 0;
}

const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];
const arrayOfNumbers2 = [20, 30, 66, 89, 100]

test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
test(arrayOfNumbers2.filter(isMultipleOfTen), [20, 30, 100]);

//問題2
// 関数 hasAVowel を宣言してください。
// この関数は .filter メソッドに実行されているという点に注目してください。
// なお、関数 hasAVowel 内で .filter メソッドを使用してはいけません。

/**
 * @param {string} ???
 * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
 */
// ここにコードを書きましょう
function hasAVowel(str){
    return str.includes("a") || str.includes("e") || str.includes("i") || str.includes("o") || str.includes("u");
}

const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

// 問題3
// 関数 `getPositiveNumbers` を宣言してください。
// この関数自体は `.filter` メソッドを使用してください。
// アロー関数も使用してください。
// まず最初は、補助関数として、受け取った数字が０以上かを確認する関数 `isPositive` を宣言してみてください。
// 関数 `getPositiveNumbers` は、Array.filterメソッドと、補助関数 `isPositive` を組み合わせることで書けるはずです。

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getPositiveNumbers(numArr){
    return numArr.filter((num) => {
        return num > 0;
    });
}


test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers([-2, -4]), []);

//問題4
// 関数 `getPositiveNumbers` を、アロー関数使って書き換えましょう。
// 今度は、補助関数`isPositive`を、関数 `getPositiveNumbers` の内部で使用しません。
// アロー関数を使って書き直した場合でも、上の問題のテストが通っているか確認しましょう。

// 問題5
// 関数 getQuestions を宣言してください。
// この関数は .filter メソッドを使用してください。
// アロー関数も使用してください。
// アロー関数は getQuestions 関数の内部で使用されます。

		/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getQuestions(arr){
    return arr.filter((str) => {
        return str.slice(-1) === "?";
    });
}

const arrayOfStrings3 = [
    "Hi, there.",
    "What in the world?",
    "My name is JavaScript",
    "Do you want to know a secret?",
  ];
  
  test(getQuestions(arrayOfStrings3), [
    "What in the world?",
    "Do you want to know a secret?",
  ]);
  test(getQuestions(arrayOfStrings3.slice(2)), [
    "Do you want to know a secret?",
  ]);
