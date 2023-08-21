'use strict'
// Please don't delete the 'use strict' line above

//問題1
function isPositive(num) {
    if (num > 0) {
       return true;
     }
     return false;
}


// testという名前で関数を宣言しよう
function test(actual, expected){
    if(actual === expected) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep Trying");
        console.log("  expected:", expected);
        console.log("    actual:", actual);
    }
}

// ちゃんと動くか確認
test(isPositive(10), true);
// => "Yay! Test PASSED." と表示される?

test(isPositive(10), false);
// => "Test FAILED. Keep trying" と表示されたのち、「実際のテスト値」と「期待値」が表示される?