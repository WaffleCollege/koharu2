'use strict'
// Please don't delete the 'use strict' line above

let actual;
let expected;

//テスト関数
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}

//問題1

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字の合計
 */

function sumArray(numArray) {
    // ここにコードを書きましょう。
    let numSum = 0;
    for(const num of numArray){
        numSum += num;
    }
    return numSum;
}
  
actual = sumArray([1, 2, 3, 4]);
expected = 10;

test(actual, expected);
  
// さらにテストを書きましょう。
  
actual = sumArray([2, 10, -5, 0]);
expected = 7;

test(actual, expected);


//問題2
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
 */

function productArray(numArray) {
    // ここにコードを書きましょう。
    let multiSum = 1;
    for(const num2 of numArray){
        multiSum *= num2
    }
    
    return multiSum;
}
  
actual = productArray([1, 2, 3, 4]);
expected = 24;
  
test(actual, expected);
// さらにテストを書きましょう。

actual = productArray([1, 0, 3, 4]);
expected = 0;

test(actual, expected);




//問題3
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */

function hasFun(wordArray) {
    for(const word of wordArray){
        if(typeof word === 'string' && word.indexOf('fun') !== -1){ //wordが文字列であるか確かめなきゃダメ
            return true;
        }
    }
    return false;
}
  
actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;
  
test(actual, expected);
  
actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;
  
test(actual, expected);
  
// さらにテストを書きましょう。
actual = hasFun(["funtasy", 2, false, "run", "hello"]);
expected = true;

test(actual, expected);


//問題4
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */

function containsOnlyBooleans(array) {
    for (const element of array){
        if(typeof element !== "boolean"){
            return false;
        }
    }
    return true;
    // ここにコードを書きましょう。
}
  
actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;
  
test(actual, expected);
  
actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

test(actual, expected);
  
// さらにテストを書きましょう。
actual = containsOnlyBooleans([true, "not a boolean", true, true, "not a boolean"]);
expected = false;

test(actual, expected);



//問題5
/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */



function concatenate(array1,array2) {
    const ansArray = [];
    for (const ele1 of array1){
        ansArray.push(ele1);
    }
    for (const ele2 of array2){
        ansArray.push(ele2);
    }
    return ansArray;
    // ここにコードを書きましょう。
}
  
actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];
  
// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
  
// さらにテストを書きましょう。
  
actual = concatenate(["eeny", "meeny", "meeny" ,3], ["miny", "moe"]);
expected = ["eeny", "meeny", "meeny",3, "miny", "moe"];
  
// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}



//問題6
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
 */

function getEvenNumbers(numArray) {
    // ここにコードを書きましょう。
    const array = [];
    for (const num of numArray){
        if(num%2 === 0){
            array.push(num);
        }
    }
    return array;
}
  
actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];
  
// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
  
// さらにテストを書きましょう。

actual = getEvenNumbers([1, 3, 5, 7]);
expected = [];
  
// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
  


//問題7
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @param {number} ??? - 配列の中の数字にかける数字
 * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
 */

function getMultipliedArray(numArray, num) {
    // ここにコードを書きましょう。
    const newArray = [];
    for (const element of numArray){
        newArray.push(element * num);
    }
    return newArray;
}
  
actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];
  
// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
  
// さらにテストを書きましょう。
actual = getMultipliedArray([1, 2, 3], 0);
expected = [0,0,0];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}


//問題8


/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
 */

function isSorted(numArray) {
    const length  =numArray.length;
    for(let i = 0; i < length; i++){
        if(numArray[i] > numArray[i+1]){
            return false;
        }
    }
    return true;
  }
  
  actual = isSorted([1, 2, 3]);
  expected = true;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = isSorted([3, 2, 3]);
  expected = false;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。
  actual = isSorted([3, 4, 4, 3]);
  expected = false;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  


//問題9
/**
 * @param {Array<any>} ??? - 配列
 * @param {string|number|boolean} ??? - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
 * @returns {number} その値が配列内で出てきた回数
 */

function countOccurrences(array, value) {
    // ここにコードを書きましょう。
    let i = 0;
    for(const element of array){
        if(element === value){
            i++;
        }
    }
    return i;
  }
  
actual = countOccurrences([1, 2, 3], 2);
expected = 1;
  
test(actual,expected);
  
actual = countOccurrences([1, 2, 2], 2);
expected = 2;
  
test(actual,expected);
  
actual = countOccurrences([1, 2, "elephant"], "elephant");
expected = 1;
  
test(actual,expected);
  
// さらにテストを書きましょう。
actual = countOccurrences([1, 2, "elephant", false, true], false);
expected = 1;
  
test(actual,expected);
  

//問題10

/**
 * @param {Array<number>} ???
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */

function getOperatedArray(array, string, num) {
    // ここにコードを書きましょう。
    const ansArray = [];
    for(const element of array){
        if(string === "+"){
            array.push(element+num);
        }
        else if(string === "*"){
            array.push(element*num);
        }
        else if(string === "-"){
            array.push(element-num);
        }
        else if(string === "/"){
            array.push(element/num);
        }
        else if(string === "%"){
            array.push(element%num);
        }
        else if(string === "**"){
            array.push(element**num);
        }
    }
  }
  
  actual = getOperatedArray([1, 2, 3], "+", 5);
  // [1, 2, 3] のそれぞれの要素に5をたす
  // [1+5, 2+5, 3+5]
  expected = [6, 7, 8];
  
  // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = getOperatedArray([9, 6, 3], "/", 3);
  expected = [3, 2, 1];
  
  // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。
  actual = getOperatedArray([9, 6, 3], "%", 3);
  expected = [0, 0, 0];
  
  // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  