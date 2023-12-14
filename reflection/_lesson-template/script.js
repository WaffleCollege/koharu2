'use strict'
// Please don't delete the 'use strict' line above

//テスト関数
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
}

//P01
let a = "B";
let b = "A";
let temp = a;
a = b;
b = temp;

// ここにあなたのコードを書いてください

console.log(a); // "A" を表示
console.log(b); // "B" を表示

//P02
// 2つの引数 username と password をとる validCredentials という名前の関数を作成しましょう。
// 両方の引数が十分な長さであれば true を、そうでなければ false を返してください。
// 「十分な長さ」は自由に決めてください

function validCredentials(username, password){
    let isValid = false;
    const length = 8; //十分な長さ
    if(username.length >= 8 && password.length >= 8){
        isValid = true;
    }
    return isValid;
}
test(validCredentials("kohapizza", "onkan"), false);
test(validCredentials("kohakohakoha", "kohakohakohakoha"), true);

//P05
const pokemons = [
    {
      Number: "001",
      Name: "Bulbasaur",
      Generation: "Generation I",
      About:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      Types: ["Grass", "Poison"],
    },
    {
      Number: "025",
      Name: "Pikachu",
      Generation: "Generation I",
      About:
        "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
      Types: ["Electric"],
    },
    {
      Number: "019",
      Name: "Rattata",
      Generation: "Generation I",
      About:
        "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
      Types: ["Normal"],
    },
];

/**
 * @param {Array<object>} ??? - ポケモンオブジェクトが入った配列
 * @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
 */

// ここにコードを書きましょう.
function getNames(arr){
    const nameArr = [];
    for(const ele of arr){
      nameArr.push(ele["Name"]);
    }
    return nameArr;
}

// 'pokemons' の配列は、以下のコードより上に書かれていなければいけません。

test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);

//P06
function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    
    // while (i < cars.length) {
    //   console.log(cars[i]);
    //   i++;
    // }

    for(let i = 0; i < cars.length; i++){
        console.log(cars[i]);
    }
}

printCars();

//P07
const elements = document.querySelectorAll(".athing");
elements.forEach((element) => element.style.backgroundColor = "red");

let j = 0;
elements.forEach((element) => {
    if (j % 2 === 0) {
        element.style.backgroundColor = "red";
    } else {
        element.style.backgroundColor = "green";
    }
    j++;
});



//P12
/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getQuestions(arr){
    return arr.filter((sentence) => (sentence.slice(0, 1) === sentence.slice(0, 1).toUpperCase()) && (sentence.slice(-1) === "?"));
}

const arrayOfStrings3 = [
    "Hi, there.",
    "What in the world?",
    "My name is JavaScript",
    "Do you want to know a secret?",
  ];
  
  test(getQuestions(arrayOfStrings3), [
    "What in the world?",
    "Do you want to know a secret?",
  ]);
  test(getQuestions(arrayOfStrings3.slice(2)), [
    "Do you want to know a secret?",
  ]);