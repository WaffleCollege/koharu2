// const { response } = require("express");

// const result = fetch("http://localhost:8080/hello");
// result.then((response) => {
//     console.log(response);
//     console.log("ステータスコード: ", response.status);
// });

// const result = fetch("http://localhost:8080/hello");
// result.then((response) => {
//     const text = response.text();
//     text.then((data) => {
//         console.log(data);
//     })
// });

// const result = fetch("http://localhost:8080/hello-json");
// result.then((response) => {
//     const json = response.json();
//     json.then((data) => {
//         console.log(data);
//         console.log(data.message);
//     });
// });

// fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
//     response.json().then((data) => {
//         console.log("dog: ", data);
//     });
// });

fetch("https://weather.tsukumijima.net/api/forecast/city/013010").then((response) => {
    response.json().then((data) => {
        console.log("forest: ",data.description.text);
    });
});