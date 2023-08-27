'use strict'
// Please don't delete the 'use strict' line above
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
* @param {Array<any>} ??? - 配列
* @returns {boolean} 与えられた配列の要素が重複を含んでいないかを表すブーリアン
*/

function merge_sort(arr){
    if(arr.length === 1) { //配列の長さが1
        return arr;
    }

    const center = Math.floor(arr.length / 2); //与えられた数値以下の最大の整数を返す
    const left = arr.slice(0,center);
    const right = arr.slice(center);

    return merge(merge_sort(left),merge_sort(right));
}

function merge(left,right) {
    const result = [];

    while(left.length && right.length) { //left,rightともに長さが0になるまで
        if(left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result,...left,...right];
}

function haveMultipleElements(array) {
    // ここにコードを書きましょう。
    const new_array = merge_sort(array);
    
    let boolean = true;

    for(let i = 0; i <= new_array.length-1; i++) {
        if (new_array[i] == new_array[i+1]) {
            boolean = false;
            break;
        }
    }

    return boolean;

}


// テストを実行
test(haveMultipleElements([1, 2, 3, 4]), true);
test(haveMultipleElements([1, 3, 3, 4]), false);