'use strict'
// Please don't delete the 'use strict' line above

//与えられた整数のリストをマージソートを使用して昇順にソートするプログラムを書く

function mergeSort(array){ //2分割
    //base case
    if(array.length < 2){
        return array;
    }

    //recursive case
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0,middle);
    let right = array.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
    
}

function merge(left,right){ //結合
    const results = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){ //どっちも空じゃなかったら
        if(left[i] < right[j]){
            results.push(left[i]);
            i++;
        }else{
            results.push(right[j]);
            j++;
        }
    }
    return results.concat(left.slice(i)).concat(right.slice(j));
    //left.slice(i) i番目以降の配列のコピー

}

let arr = [1,5,4,3,8,7,6,10,18,2];
console.log(mergeSort(arr)); //=>[1,2,3,4,5,6,7,8,10,18]