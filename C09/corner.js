function corner(left, right){
    let sum = left + right;
    let result = 0;
    result = factorial(sum) / (factorial(left)*factorial(right));
    console.log(result);
    return result;
}

function factorial(num){ //num!を返す
    if(num < 2) return 1;
    return num * factorial(num - 1);
}

corner(20,20);

// 別解
function gridRoutes(n){
    let grid = Array(n + 1).fill(null).map(() => Array(n + 1).fill(0))
    // 要素が全て0のn+1*n+1行列を得る

    for (let i = 0; i <= n; i++){
        grid[i][0] = 1;
        grid[0][i] = 1;
    }
    // 最左列、最上列の要素全部1にする

    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n; j++){
            grid[i][j] = grid[i-1][j] + grid[i][j-1];
        }
    }

    return grid[n][n];
}

console.log(gridRoutes(20));