function palindrome(){
    let kaibunMax = 0;
    for (let i = 100; i < 1000; i++){
        for (let j = 100; j < 1000; j++){
            let kaibunKouho = i * j;
            let kaibun = kaibunKouho.toString();
            let len = kaibun.length;
            let palindrome = true;

            for (k = 0; k < len/2; k++){
                if(kaibun[k] !== kaibun[len- k - 1]){ //一つでも回文じゃないところ見つけたら強制的にループ抜ける
                    palindrome = false;
                    break;
                }
            }

            if(palindrome && (kaibunKouho > kaibunMax)){ //回文数で、仮回文最大数より大きい数字だったら
                kaibunMax = kaibunKouho;
            }
        }
    }
    return kaibunMax;
}

console.log(palindrome()); // => 906609

// 別解(ループが2回で済む！)

function palindrome2(){
    let largestPalindrome = 0;
    for (let i = 100; i < 1000; i++){
        for (let j = i; j < 1000; j++){
            const result = i * j;

            if(result.toString() === result.toString().split('').reverse().join('') && result > largestPalindrome){
                largestPalindrome = result;
            }
        }
    }
    return largestPalindrome;
}

console.log(palindrome2()); // => 906609