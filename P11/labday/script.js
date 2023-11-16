'use strict'
// Please don't delete the 'use strict' line above

// 問題1

// 素数を小さい方から6つ並べると 2, 3, 5, 7, 11, 13 であり、6番目の素数は 13 です。
// では、10001 番目の素数を求めてください。

function isPrimeNum(num){
    if(num === 1){
        return false;
    }
    for(let i = 2; i*i<=num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

// console.log(isPrimeNum(19));
// console.log(isPrimeNum(6));

function searchPrimeNum(n){
    let num = 1; //素数かどうか見ていく数字(num = 1,2,3,4,...)
    let count = 0; //素数が出てきた回数
    while(count <= n){
        if(isPrimeNum(num)){
            count++;
        }
        num++;
    }
    return num-1;
}

console.log(searchPrimeNum(6));
console.log(searchPrimeNum(10001));




// 問題2

// 10以下の素数の和は 2 + 3 + 5 + 7 = 17 です。
// では、200万以下の全ての素数の和を求めてください。

function getSumPrime(limit){
    let num = 1;
    let sum = 0;
    while(num <= limit){
        if(isPrimeNum(num)){
            sum += num;
        }
        num++;
    }
    return sum;
}

console.log(getSumPrime(10));
console.log(getSumPrime(2000000));