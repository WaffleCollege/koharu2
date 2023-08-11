'use strict'
// Please don't delete the 'use strict' line above

// ヒント： ここで何かする必要があるかもしれません
let i = 1;
let givenNumber;

function counter() {
    // ここにあなたのコードを書いてください
    console.log(i);
    i++;
    
  }
  
  counter(); // => 1
  counter(); // => 2
  counter(); // => 3
  // etc.


  //isOdd という関数を宣言します。これが呼び出されたら、
  //与えられた数値が奇数かどうかを console.log で表示しましょう。

  function isOdd(givenNumber) {
    // ここにあなたのコードを書いてください
    // 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示

    if (givenNumber%2==1) { //奇数
        console.log("Yes, it's odd");
    }else{ //偶数
        console.log("No, it's even");
    }
  }

  isOdd(4); //=>"No,it's even"
  isOdd(3); //=>"Yes, it's odd"