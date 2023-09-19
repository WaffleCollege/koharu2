'use strict'
// Please don't delete the 'use strict' line above

//テスト
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
function sayHellos(n){
    for(let i=1; i<=n; i++){
        console.log("Hello!");
    }
}
sayHellos(4);
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

//問題2
function countToTen(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}

countToTen();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//問題3
function counter(num) {
    for(let i=0; i<num; i++){
        console.log(i);
    }
}
counter(5);

//問題4
/**
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
 */
// ここにコードを書きましょう
function createRange(numSt, numEn){
    const arr = [];
    for(let i = numSt; i<=numEn; i++){
        arr.push(i);
    }
    return arr;
}

test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

//問題5
function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    for(let i = 0; i < cars.length; i++){
        console.log(cars[i]);
    }
}
printCars();

//問題6
const commands = ["Print me last", "Print me second", "Print me first"];

function decrement(list) {
    let i = list.length - 1;
    while(i>=0){
        console.log(list[i]);
        i--;
    }
}
//テスト
decrement(commands);
// "Print me first"
// "Print me second"
// "Print me last"

//問題7-1
/**
 * @param {Array<number>} ???
 * @param {Array<number>} ???
 * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
 */
// ここにコードを書きましょう

function addTogether(arr1, arr2){
    const ansArr = [];
    for(let i = 0; i < arr1.length; i++){
        ansArr.push(arr1[i] + arr2[i]);
    }
    return ansArr;
}

test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);

//問題7-2
function addTogether2(arr1, arr2){
    const ansArr = [];
    let LongLength = 0;
    let ShortLength = 0;
    let LongArr = [];
    if(arr1.length >= arr2.length){
        LongLength = arr1.length;
        ShortLength = arr2.length;
        LongArr = arr1;
    }
    else{
        LongLength = arr2.length;
        ShortLength = arr1.length;
        LongArr = arr2;
    }

    for(let i = 0; i < LongLength; i++){
        if(i >= ShortLength){
            ansArr.push(LongArr[i]);
        }
        else{
        ansArr.push(arr1[i] + arr2[i]);
        }
    }
    return ansArr;
}

test(addTogether2([1], [4, 5, 6]), [5, 5, 6]);
test(addTogether2([],[2,3]),[2,3])

//問題8
/**
 * @param {Array<any>} 数字の配列
 * @returns {number} 引数の配列の要素の合計値
 */
// ここにコードを書きましょう
function sum_arr(numArr){
    let num = 0;
    const arrLength = numArr.length;
    for(let i = 0; i < arrLength; i++){
        num = num + numArr[i];
    }
    return num;
}

test(sum_arr([1]), 1);
test(sum_arr([1, 1, 1, 1, 1]), 5);
test(sum_arr([1, 2, 3, 4, 5]), 15);

//問題9
function sum(...num){
    let ans = 0;
    for(const n of num){
        ans += n;
    }
    return ans;
}
test(sum(2,3,4),9);