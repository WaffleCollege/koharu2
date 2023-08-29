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


//マージソート
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

//問題2
//2つの自然数の最大公約数を求める関数findGCM
/**
* @param {int} num1 - 整数
* @param {int} num2 - 整数
* @returns {int} 2数の最大公約数
*/

function findGCM(num1,num2){
    if(num1 < num2){ //自然数num1 > num2を確認
        let copy = num1;
        num1 = num2;
        num2 = copy;
    }

    let r = num2 % num1;
    while(r != 0){
        num2 = num1;
        num1 = r;
        r = num2 % num1;
    }
    return num1;

}

test(findGCM(8,6),2);
test(findGCM(65,26),13);
test(findGCM(2,3),1);


//問題3
const hands = new Array("パー", "グー", "チョキ");
const player = "パー"

/**
 * @param {int} min - ランダムで出したい値の最小値
 * @param {int} max - ランダムで出したい値の最大値より1つ大きい値
 * @returns {int}} min 以上 max 未満 の整数値を「ランダムで」出力
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// 1つめの引数を0, 2つ目の引数を3とすると, 0から2の整数がランダムで出力される
//console.log(getRandomInt(0, 3));

// 上記のgetRandomInt関数と、配列 hands を生かしてジャンケンゲームを作成してみましょう！



//じゃんけん関数
/**
 * @param {String} player - 人間の出す手
 * 
 * @returns {String} "勝ち" or "負け"
 */


function JankenGame(player){
    //人間の出す手を記録
    const i = hands.indexOf(player);
    //コンピュータの出す手を記録
    const j = getRandomInt(0,3);

    //勝ち
    const winConditions = [[0,1], [1,2], [2,0]];
    //負け
    const loseConditions = [[0,2], [1,0], [2,1]];
    //あいこ 使わないけど一応定義
    const stalemateConditions = [[0,0], [1,1], [2,2]];


    if( winConditions.some(([a,b]) => a === i && b === j) ) { //勝ち
        console.log("you win!");
    }else if( loseConditions.some(([a,b]) => a === i && b === j) ){ //負け
        console.log("you lose!");
    }else{ //あいこ
        console.log("stalemate!")
    }

    console.log("you : " + hands[i]);
    console.log("computer : " + hands[j]);

}

//テスト
JankenGame(player);


//問題4
