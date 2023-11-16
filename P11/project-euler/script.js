// 'use strict'
// // Please don't delete the 'use strict' line above

// //問題1
// //フィボナッチ数列の項は前の2つの項の和です。
// //最初の2項を 1, 2 とすれば, 最初の10項は以下の通りとなります。
// //1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// //では、数列の項の値が400万以下のとき, 偶数の項の総和を求めてください。

// //fibonacci(n) フィノバッチ数列のn項目を返す
// function fibonacci(n){
//     if(n===1){
//         return 1;
//     }else if(n===2){
//         return 2;
//     }else{
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }

// //searchFib(n) 数列の項の値がn以下の最大項が何項目か求める
// function searchFib(n){
//     let i = 1;
//     while(fibonacci(i) <= n){
//         i++;
//     }
//     //console.log("数列の項の値が",n,"以下の最大項は",fibonacci(i-1),"で第",i-1,"項目です");
//     return i-1;
// }

// //数列の項の値がn以下のとき, 偶数項の総和を求める
// function sumEvenUndern(n){
//     let sum = 0;
//     for(let i=1; i<=searchFib(n); i++){
//         if(fibonacci(i)%2 === 0){
//             sum = sum + fibonacci(i);
//         }
//     }
//     return sum;
// }


// console.log(sumEvenUndern(4000000)); // => 4613732



function sumEvenFibonacci(limit){
    let sum = 0;
    let a = 1;
    let b = 2;
    
    while(b <= limit){
        if(b%2 === 0){
            sum += b;
        }

        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    return sum;
}

console.log(sumEvenFibonacci(4000000)); // => 4613732




// 問題2
// 13195 の素因数は 5, 7, 13, 29 です。
// 600851475143 の素因数のうち最大のものを求めてください。

// maxPrimeFactor(n) nの最大素因数（素因数：自然数の約数になる素数のこと）
function maxPrimeFactor(n){
    let firstFactor = 2; //最初の素因数候補
    let maxFactor = 1;

    while(n > 1){

        if(n%firstFactor === 0){
            maxFactor = firstFactor;
            while(n%firstFactor === 0){
                n = n / firstFactor;
            }
        }
        firstFactor++;
    }
   
    return maxFactor;
}

console.log(maxPrimeFactor(8));
console.log(maxPrimeFactor(14));
console.log(maxPrimeFactor(50));
console.log(maxPrimeFactor(600851475143));


// 問題3
// 2520 は 1 から 10 の数字の全ての整数で割り切れる数字であり、そのような数字の中では最小の値です。
// では、1 から 20 までの整数全てで割り切れる数字の中で最小の正の数はいくらになりますか？


function soinsubunkai(n){
    const soinsuList = [];
    let devisor = 2;
    while(n > 1){
        if(n%devisor === 0){
            soinsuList.push(devisor);
            while(n%devisor === 0){
                n = n / devisor;
            }
        }devisor++;
    }
    return soinsuList;
}

console.log(soinsubunkai(10));
console.log(soinsubunkai(24));


