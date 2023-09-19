## ペアワークのヒント

### 時間 の取得方法

Dateというオブジェクトに、時間に関する*メソッド* (=オブジェクトがもつ関数) が入ってます。

Dateオブジェクトの詳細は[こちら](https://www.sejuku.net/blog/30171)

```js
const today = new Date();

// 今日の 年 を取得し、変数に保存
let year = today.getFullYear();

// 今日の 月 を取得し、変数に保存


// 今日の 日 を取得し、変数に保存


// あとは、必要な情報をDOM操作を使って、HTMLに表示させよう
```

### ランダムな色 の取得方法

色は、R・G・B の3色の組み合わせで表現されるので、それをうまく使うとランダムに生成できます！

いろいろな方法があります。詳細は[こちら](https://q-az.net/random-color-code/)


```js
// 呼び出されるたびにランダムに色を生成する
let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
```
