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
 * @param {number} ??? - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13歳から 19歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */

function isTeenager(age) {
    // ここにコードを書きましょう.
    return age >= 13 && age <= 19;
}

  
  actual = isTeenager(3);
  expected = false;
  
 test(actual,expected);
  
  actual = isTeenager(14);
  expected = true;
  
  test(actual,expected);
  
  // さらにテストを書いて、コードが正しいことを確認してください。
  actual = isTeenager(19);
  expected = true;
  
  test(actual,expected);

  actual = isTeenager(20);
  expected = false;
  
  test(actual,expected);


  //問題2

  function isTeenager2(age) {
    // ここにコードを書きましょう.
    if(typeof age === 'int'){
    return age >= 13 && age <= 19;
    }
    else{
        return "Invalid! Age is not a number!"
    }
}


  actual = isTeenager2("Hello!");
expected = "Invalid! Age is not a number!";

test(actual,expected);

actual = isTeenager2(true);
expected = "Invalid! Age is not a number!";

test(actual,expected);

actual = isTeenager2();
expected = "Invalid! Age is not a number!";

test(actual,expected);



//問題3
/**
 * @param {string} ??? - 人の名前
 * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章
 */

// ここにコードを書きましょう.
function anotherGreeting(name,bool,bool2){
    if(bool && bool2){
        return "Hello, " + name + "-san.";
    }
    else if(bool === true && bool2 !== true){
        return "Goodbye, " + name + "-san.";
    }
    else if(bool !== true && bool2 === true){
        return "Hello, " + name + "!";
    }
    else{
        return "Goodbye, " + name + "!";
    }

}

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

test(actual,expected);

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

test(actual,expected);

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

test(actual,expected);

// さらにテストを書いて、コードが正しいことを確認してください。
actual = anotherGreeting("koha", false, false);
expected = "Goodbye, koha!";

test(actual,expected);



//問題4
function anotherGreeting2(name,bool,bool2){
    if(typeof name !== 'string' || typeof bool !== 'boolean' || typeof bool2 !== 'boolean'){
        return "無効なインプットです！";
    }
    else if(bool && bool2){
        return "Hello, " + name + "-san.";
    }
    else if(bool === true && bool2 !== true){
        return "Goodbye, " + name + "-san.";
    }
    else if(bool !== true && bool2 === true){
        return "Hello, " + name + "!";
    }
    else{
        return "Goodbye, " + name + "!";
    }

}
actual = anotherGreeting2(true, false, true);
expected = "無効なインプットです！";

test(actual,expected);

actual = anotherGreeting2("Sam", true, 0);
expected = "無効なインプットです！";

test(actual,expected);



//問題5・6
/**
 * @param {number} ??? - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
 */

function getLetterGrade(num){
    if(num > 100 || num < 0){
        return "無効な点数です。";
    }
    else if(num >= 90 && num <= 100) {
        return "A";
    }else if(num >= 80 && num <= 89){
        return "B";
    }else if(num >= 70 && num <= 79){
        return "C";
    }else if(num >= 60 && num <= 69){
        return "D";
    }else{
        return "F";
    }
}

actual = getLetterGrade(95);
expected = "A";

test(actual,expected);

// さらにテストを書いて、コードが正しいことを確認してください
actual = getLetterGrade(60);
expected = "D";

test(actual,expected);

actual = getLetterGrade(101);
expected = "無効な点数です。";

test(actual,expected);

// さらにテストを書いて、コードが正しいことを確認してください
actual = getLetterGrade(-1);
expected = "無効な点数です。";

test(actual,expected);


//問題7・8
/**
 * @param {"A"|"B"|"C"|"D"|"F"} ??? - 成績
 * @returns {number} 各成績における最高点
 */

function getBestNumericalGrade(score){
    if(score === "A"){
        return 100;
    }else if(score === "B"){
        return 89;
    }else if(score === "C"){
        return 89;
    }else if(score === "D"){
        return 79;
    }else if(score === "E"){
        return 69;
    }else if(score === "F"){
        return 59;
    }else{
        return "無効な点数です。";
    }
}

actual = getBestNumericalGrade("A");
expected = 100;

test(actual,expected);

actual = getBestNumericalGrade("B");
expected = 89;

test(actual,expected);

actual = getBestNumericalGrade("F");
expected = 59;

test(actual,expected);

actual = getBestNumericalGrade("恐竜ってすばらしい");
expected = "無効な点数です。";

test(actual,expected);

actual = getBestNumericalGrade(100);
expected = "無効な点数です。";

test(actual,expected);

// さらにテストを書いて、コードが正しいことを確認してください
actual = getBestNumericalGrade("G");
expected = "無効な点数です。";

test(actual,expected);