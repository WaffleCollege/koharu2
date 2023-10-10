'use strict'
// Please don't delete the 'use strict' line above

//問題1
/**
 * 引数①: {string} str - テストの対象となる文字列
 * 引数②: {number} num - 閾値
 * 返り値： 与えられた文字列の長さが指定された閾値より長いかどうか
 */
// ここにコードを書きましょう

function isLongerThan(str,num){
    return str.length > num;
}

isLongerThan("komatsuna", 10); //false
isLongerThan("koharu", 2); //true

//問題2
/**
 * @param {Array<any>} arr
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */

function hasFun(arr) {
    // ここにコードを書きましょう。
    for (const element of arr){
        //もし入ってたら
        if(element.includes("fun")){
        return true;
        }
    }
    return false;
}

hasFun(["apple","afuna"]); //true
hasFun([]); //false

//問題3

/**
 * @param {Array<number>} ???
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */

function getOperatedArray(arr,operator,num) {
    // ここにコードを書きましょう。
    const answerArr = [];
    for (const element of arr){
        if(operator === "+"){
            answerArr.push(element + num);
        }
        else if(operator === "-"){
            answerArr.push(element - num);
        }
        else if(operator === "*"){
            answerArr.push(element * num);
        }
        else if(operator === "/"){
            answerArr.push(element / num);
        }
        else if(operator === "**"){
            answerArr.push(element ** num);
        }
        else{
            answerArr.push(element % num);
        }
    }
    return answerArr;
}

getOperatedArray([1,2,3],"+",3); //[4,5,6]
getOperatedArray([1,2,3],"-",3); //[-2,-1,0]
getOperatedArray([1,2,3],"*",3); //[3,6,9]
getOperatedArray([12,6,3],"/",3); //[4,2,1]
getOperatedArray([1,2,3],"**",3); //[1,8,27]
getOperatedArray([1,2,3],"%",3); //[1,2,0]