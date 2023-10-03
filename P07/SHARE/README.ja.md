# Recursion - 再帰

**Recursion - 再帰関数**は、関数がその関数自体を呼び出すものです。この課題では、3 つの問題を解くのに再帰を使ってみましょう。

再帰は、やってみることが１番の上達への近い道です！！一緒に頑張りましょう🔥
教材に挙げるリソースをよく読んで理解しましょう。


## 目標

この課題では、JavaScript で再帰を使うことで以下を実現します。

- 🖐 _グー（Rock）、チョキ（Scissors）、パー（Paper）_ を出せるようにする。
- 💻 DOM ツリーの要素をすべて見て、クラス名を取得する。
- 🧵 JavaScript の値を `JSON` 文字列に変換する。

## 問題演習


#### 問題1

この課題では、`src/rockPaperScissors.js`に解答のプログラムを書いていきます！！

そして、ブラウザで `testrunner.html` を開き、テストケースを通過したか否かを確認しましょう！

**準備：**

[再帰のビジュアライゼーション](https://medium.com/@sidiousvic/visualizing-recursion-b8107bd56b01)のブログを簡単に、まずは読んでみましょう。このあと解く問題に関係してます。


**問題：**

`rockPaperScissors`：1 人のプレーヤーが 3 ラウンド制のじゃんけんゲームでプレイしたときの、すべての手の組み合わせを表す配列を、生成する関数を書いてください。結果は次のようになります：

  ```js
  [["rock", "rock", "rock"],
  ["rock", "rock", "paper"],
  ["rock", "rock", "scissors"],
  ["rock", "paper", "rock"],
  ...etc...
  ]
  ```


上記の関数を作成し終わったしたら、任意の数のラウンドに対して結果を返すように関数を修正してください。例：

  ```js
  rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
  ```

#### 問題2

この問題は、`src/getElementByClassName.js` ファイルにコードを記述して、テストをパスしてください。

JavaScript の Document オブジェクトはかなり使い勝手がよく、私たちに便利な機能を提供してくれます。
例えば、クラス名でページ上のすべての要素を取得してくれます。

```js
const className = "example";
const elements = document.getElementsByClassName(className);
```

ただし、ここではビルトインのメソッドを使わず、自分自身で実装して見ましょう！

`getElementByClassName`関数: 再帰の実践的な例です。**DOM** は 🌳 木構造になっていて、再帰は木構造の要素全てにアクセスするには効率的な方法です。

**ヒント：**

- `document`スタートのノードになります
- `console.log(document.childNodes)`を表示してみてください。Chromeのコンソール画面には何が出力されますか？
- 表示されたものの中から、さらにchildNodesが入れ子になっていることを確認してみてください！
- あとは、どうしたら全てのノードを辿ることができますか？？？



**わからないときは参考資料をチェックしてみてください。:**
    - [document.body](https://developer.mozilla.org/ja/docs/Web/API/Document/body)
    - [element.childNodes](https://developer.mozilla.org/ja/docs/Web/API/Node/childNodes)
    - [element.childNodes](https://developer.mozilla.org/ja/docs/Web/API/Node/childNodes) と [element.children](https://developer.mozilla.org/ja/docs/Web/API/Element/children) の違いは何でしょう？


#### 問題4

この問題は、`src/stringifyJSON.js` ファイルにコードを記述して、テストをパスしてください。

まずは、Console.log にこれらを表示させ、`JSON.stringify` で何を行っているのかを理解しましょう。:

```js
console.log(JSON.stringify({ x: 5, y: 6 }));
// オブジェクトを渡すと何が出力されますか？
```
```js
console.log(
  JSON.stringify({ x: [10, undefined, function() {}, Symbol("")] })
);
// オブジェクトの値に「numbers」「undefined」「functions」「symbols」を渡すと何が出力されますか？
```
```js
console.log(JSON.stringify([3, "false", false]));
// 「numbers」「strings」「booleans」の配列を渡すと何が出力されますか？
```
```js
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Date オブジェクトを渡すと何が表示されますか？
```

`JSON.stringify` メソッドを自分で作ってみましょう。

このメソッドは JavaScript のあらゆる値を **JSON** に変換するメソッドです。これも再帰の実践的な使い方の例になります。



## Resources - 参考資料

- [Fun Fun Function's Recursion video](https://www.youtube.com/watch?v=k7-N8R0-KY4) を観てみましょう。
- `getElementsByClassName` をクリアする上で役に立つ知識。
  - [JavaScript Info: DOM ノード](https://javascript.info/dom-nodes)
  - [JavaScript Info: DOM を渡り歩く](https://javascript.info/dom-navigation)
