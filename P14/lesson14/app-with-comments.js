/*
// fetch で "http://localhost:8080/hello" にリクエストを送り返り値を確認する
const result = fetch("http://localhost:8080/hello");
console.log('result: ', result);
 */


/*
// fetch で "http://localhost:8080/hello" にリクエストを送り、Promiseのthenコールバックを設定する
const result = fetch("http://localhost:8080/hello");
// 変数 result の中身はPromiseオブジェクト, then メソッドのコールバックにレスポンスオブジェクトが渡される
result.then((response) => {
  console.log(response);
  console.log("ステータスコード: ", response.status);
});
 */

/*
// fetch で "http://localhost:8080/hello" にリクエストを送り、Requestオブジェクトのtextメソッドの結果を取得する
const result = fetch("http://localhost:8080/hello");
result.then((response) => {
  // Responseオブジェクトの text メソッドを実行すると、レスポンス内のデータをテキストに変換してくれる
  const text = response.text();
  // 返り値がPromiseオブジェクトなため、then メソッドのコールバックで結果のテキストを受け取る
  text.then((data) => {
    console.log(data);
  });
});
 */

/*
// fetch で "http://localhost:8080/hello-json" にリクエストを送り、Requestオブジェクトのjsonメソッドの結果を取得する
const result = fetch("http://localhost:8080/hello-json");
result.then((response) => {
  // Responseオブジェクトの json メソッドを実行すると、レスポンス内のデータをJSONとして解釈し、JavaScriptのオブジェクトに変換してくれる
  const json = response.json();
  // 返り値がPromiseオブジェクトなため、then メソッドのコールバックで結果のオブジェクトを受け取る
  json.then((data) => {
    console.log(data);
    console.log(data.message);
  });
});
 */

/*
// メソッドチェーンver
fetch("http://localhost:8080/hello-json")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
      console.log(data.message);
    })
  });
 */

/*
// Dog APIにリクエストを送る
fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    response.json().then(data => {
      console.log('dog: ', data);
    })
  });
 */
