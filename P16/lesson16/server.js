const express = require("express");
const { request, response } = require("express");
const app = express();
// オプション: POSTで送られてきたデータを読み込めるようにするための設定
app.use(express.urlencoded({ extended: true }));

// ユーザー一覧
const Users = [
  { id: 1, name: "Suzuki" },
  { id: 2, name: "Sato" },
  { id: 3, name: "Takahashi" }
];

// ユーザー一覧を返すAPI
app.post("/getusers", (request, response) => {
  response.json(Users);
});

/*
 * 指定されたユーザーIDのユーザーを返すAPI
 * ※ :userId のように : 付きのルーティングを設定すると、URL内に含まれる任意の値を取得することができる
 * 例）/getuser/1 にアクセスした場合、request.params.userId は 1 となる
 */
app.get("/getuser/:userId", (request, response) => {
  // users配列から、指定されたユーザーIDのユーザーを取得する
  const target = Users.find(user => {
    // :userId に指定された値を取得する
    // request.params.userId は文字列なので、Number() で数値に変換する
    return user.id === Number(request.params.userId);
  });
  if (target) {
    // ユーザーが見つかった場合
    response.json(target);
  } else {
    // ユーザーが見つからなかった場合
    response.status(500);
    response.json({
      message: "user not found"
    });
  }
});

// 新しいユーザーを作成するAPI
app.post("/createuser", (request, response) => {
  const newUser = request.body.user;
  // 新しいユーザーIDを決定する処理や、バリデーションなどは省略
  Users.push(newUser);
  response.status(200);
  response.json({
    message: "user created"
  });
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
