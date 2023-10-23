'use strict'
// Please don't delete the 'use strict' line above

//問題1
//10未満の自然数のうち、3もしくは5の倍数になっているものは3,5,6,9の4つがあり,
//これらの合計は23になります。同じようにして、1000未満の3か5の倍数になっている数字の合計を求めてください。

function sumOf3and5times(){
    let sum = 0;
    for(let i = 1; i<1000; i++){
        if( (i%3 === 0) || (i%5 === 0) ){
            sum = sum + i;
        }
    }    
    return sum;
}

//テスト
console.log(sumOf3and5times()); // => 233168

//問題2
//左右どちらから読んでも同じ値になる数を回文数と言います。
//2桁の数の積で表される回文数のうち、最大のものは 9009 = 91 × 99 です。
//では、3桁の数の積で表される回文数の最大値を求めてください。

function getMaxKaibun(){
    let MaxKaibun = 0;                      //返り値を定義
    for(let i = 100; i<1000; i++){
        for(let j = 100; j<1000; j++){
            let zantei = i*j;
            let string = (zantei).toString(); //2数の積を文字列化
            let len = string.length;
            let isPalindrome = true; //回文数かどうか
            for(let k = 0; k < len/2; k++){
                if(string[k] !== string[len-k-1]){ //回文数じゃなかったら
                    isPalindrome = false;
                    break; //今いるループを抜ける
                }
            }
            if (isPalindrome && zantei > MaxKaibun){
                MaxKaibun = zantei;
            }
        }
    }
    return MaxKaibun;
}

//テスト
console.log(getMaxKaibun()); // => 906609