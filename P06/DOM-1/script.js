'use strict'
// Please don't delete the 'use strict' line above

// favoriteFoodのidがついたpタグを持ってきて、変数に入れる
const favoriteFood = document.getElementById("favoriteFood")

// 上で作成した変数に、文字をいれる
favoriteFood.textContent = "カレーライス";


// 問題1
// 上のを真似して、「好きなこと」も表示させましょう！
const favoriteThings = document.getElementById("favoriteThings")

favoriteThings.textContent = "ドラムを叩くこと";



// 問題2
// 日付を表示させましょう！
const dataInfo = document.getElementById("dateInfo");
dataInfo.textContent = "2023/9/19";




// 問題3
// DOMイベントを活用して、「クリックしたら背景色が変わる」ようにしよう
function ColorChange(){
    document.body.style.backgroundColor = 'green';
}
const changeColor = document.querySelector("#changeColor");
changeColor.addEventListener('click',ColorChange);