/* exported stringifyJSON */

console.log(JSON.stringify({ x: 5, y: 6 }));
// オブジェクトを渡すと何が出力されますか？
// {"x":5,"y":6}

console.log(
  JSON.stringify({ x: [10, undefined, function() {}, Symbol("")] })
);
// オブジェクトの値に「numbers」「undefined」「functions」「symbols」を渡すと何が出力されますか？
// {"x":[10,null,null,null]}

console.log(JSON.stringify([3, "false", false]));
// 「numbers」「strings」「booleans」の配列を渡すと何が出力されますか？
// [3,"false",false]

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Date オブジェクトを渡すと何が表示されますか？
// "2006-01-02T06:04:05.000Z"



const stringifyJSON = (obj) => { 
  //与えられた値を表現するJSON文字列 を返す
  //値がプリミティブ型ならそのまま文字列にして返す
  if( (typeof obj === "number") || (typeof obj === "string") || (typeof obj === "boolean") || (typeof obj === null) ){
    if(typeof obj === "string"){
      return "${obj}";
    }
    else {
      return String(obj);
    }
  }

  //配列
  if(Array.isArray(obj)){
    const out = [];
    for (const element of obj){
      out.push(stringifyJSON(element));
    }
    return out;
  }

  //オブジェクト
  if(typeof obj === "object"){
    for (const key in obj){
      const newValue = stringifyJSON(obj[key]);
      const newKey = stringifyJSON(key);
    }
  }

};
