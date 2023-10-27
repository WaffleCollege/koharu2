// 再帰を使う
function fibonacci(n){
    //base case
    if(n===0){
        return n;
    }

    if(n===1){
        return n;
    }

    //recursive case
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

// 別解
function fibonacci2(n){
    if(n === 0) return 0;
    if(n === 1) return 1;

    let a = 1; //フィボナッチ数列の一項目
    let b = 1; //フィボナッチ数列の二項目

    for(let i = 3; i<=n; i++){
        const temp = b; //フィボナッチ数列のn-1項目
        b = a + b; //フィボナッチ数列のn項目
        a = temp;
    }
    return b;
}
console.log(fibonacci2(4));
console.log(fibonacci2(5));
console.log(fibonacci2(6));

// 別解
function fibonacci3(n){
    if (n <= 1) return n;

    //初期の2つのフィボナッチ数初期化
    let fib = [0, 1];

    //2~nのフィボナッチ数を計算
    for (let i = 2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i - 2];
    }
    return fib[n];
}

console.log(fibonacci3(4));
console.log(fibonacci3(5));
console.log(fibonacci3(6));