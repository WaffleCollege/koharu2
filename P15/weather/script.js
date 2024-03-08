"use strict";

// Please don't delete the 'use strict' line above

const WEATHER_FORECAST =
  "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

fetch(WEATHER_FORECAST).then(response => {
  response.json().then(data => {
    console.log("data: ", data);
    console.log(data[0]["timeSeries"][0]["areas"][0]["weathers"][1]);
  });
});

function getTodaysForecast(regionCode) {
  // 正しい地域コードかどうかの確認
  // const validRegionCodes = regionCode.substring(0,2);
  // const codenum = parseInt(validRegionCodes);
  // if (codenum<1 || codenum>47) {
  //   console.log("正しい地域コードを入力してください");
  //   return;
  // }

  const APIUrl =
    "https://www.jma.go.jp/bosai/forecast/data/forecast/" +
    regionCode +
    ".json";

  const content = document.getElementById("forecast");

  fetch(APIUrl).then(response => {
    response.json().then(data => {
      console.log(data[0]["timeSeries"][0]["areas"][0]["weathers"][0]);
      content.innerHTML = data[0]["timeSeries"][0]["areas"][0]["weathers"][1];
    });
  });
}

getTodaysForecast(130000);

// 問題3
// function getTodaysForecast(regionCode) {
//   const code = regionCode.substring(0,2);
//   const codenum = parseInt(code);
//   if(codenum < 1 || codenum > 47){
//       console.log(" 正しい地域コードを入力してください");
//       return;
//   }

//   const WEATHER_FORECAST =　"https://www.jma.go.jp/bosai/forecast/data/forecast/" + a + ".json"

//   const content = document.getElementById("forecast");

//   fetch(WEATHER_FORECAST)
//   .then((response) => {
//     response.json()
//     .then((data) => {
//       const forecast = data[0]["timeSeries"][0]["areas"][0]["weathers"][0];
//       console.log(forecast);
//       content.innerHTML = forecast;
//     })
//   })
// }
