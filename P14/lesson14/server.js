const express = require('express');
const {request, response} = require("express");
const app = express();

// index.htmlを表示する
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});
// app.jsを取得できるようにする
app.get('/app.js', (request, response) => {
  response.sendFile(__dirname + '/app.js');
});

// テキストを返すサンプル
app.get('/hello', (request, response) => {
  response.send('Hello World!');
});

// JSONを返すサンプル
app.get('/hello-json', (request, response) => {
  const obj = {
    message: 'Hello JSON!',
  };
  response.json(obj);
});

app.listen(8080, () => {
  console.log('server running on port 8080');
});
