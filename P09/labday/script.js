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

/**
 * @param {object} obj - オブジェクト
 * @param {Array<string>} arr - 文字列の入った配列
 * @returns {object} 与えられた配列の要素をキーにして、それに対応する値は第1引数のオブジェクトから抽出して作られた新しいオブジェクト
 */

// ここにコードを書きましょう.
function select(obj, arr){
    const newObj = {}; //空のオブジェクトを定義
    for(const key of arr){
        newObj[key] = obj[key];
    }
    return newObj;
}

test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, []), {});


//問題2

/**
 * @param {Array<object>} arr
 * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列。重複した値がある場合は1つだけ残す。
 */

// ここにコードを書きましょう
function getAllValues(arr){
    const answerArr = [];
    for(const obj of arr){
        for(const key in obj){
            if(!answerArr.includes(obj[key])){
                answerArr.push(obj[key]);
            }
        }
    }
    return answerArr;
}

const collection3 = [{ a: 1, b: 2, c:2 }, { d: 1, e: 3 }, { f: 4, g: 5 }];
const collection4 = [{ d: 1, e: 3 }, { f: 4, g:5 }];

test(getAllValues(collection3), [1, 2, 3, 4, 5]);
test(getAllValues(collection4), [1, 3, 4, 5]);

//問題3
const elements = document.getElementsByClassName("athing");

for (let i = 0; i < elements.length; i++) {
    if (i % 2 === 0) {
        elements[i].style.backgroundColor = '#ff0000'; //赤
    } else {
        elements[i].style.backgroundColor = '#008000'; //緑
    }
}

//getElementsByClassName メソッドは、指定されたクラス名をすべて持つすべての子要素の配列風オブジェクトを返す。
//だからelements[i]と指定しなければダメ！