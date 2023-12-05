'use strict'
// Please don't delete the 'use strict' line above

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

//問題1
/**
    * @param {Array<number>} ???
    * @returns {Array<string>} 与えられた配列の中にある、数字それぞれに20点追加した点数の配列。
    * ただし、最大100点とし、20点加点した結果、100点を越える場合は、その要素は100とする
    */
   // ここにコードを書きましょう
function giveBonusPoints(numArr){
    return numArr.map((num) => {
        if(num > 80){
            return 100;
        }else{
            return num + 20;
        }
    });
}

const points = [10, 60, 20];
const points2 = [10, 90, 85];

test(giveBonusPoints(points), [30, 80, 40]);
test(giveBonusPoints(points2), [30, 100, 100]);


//問題2
/**
	* @param {Array<Object>} ???
	* @returns {Array<string>} 与えられた配列の中にある、Level45以上のPokemonオブジェクトのみを要素として持つ配列
	*/
// ここにコードを書きましょう
const getStrongPokemon = (list) => 
    list.filter( pokemonName => pokemonName["level"] >= 45 );

//アロー関数:returnなし={}いらない！

const pikachu = {"name": "Pikachu", "level": 24};
const hitokage = {"name": "Hitokage", "level": 50};
const charizard = {"name": "Charizard", "level": 75};
const pachirisu = {"name": "Pachirisu", "level": 32};
const eevee = {"name": "Eevee", "level": 30};
const  piplup= {"name": "Piplup", "level": 80};
const pokemonList = [pikachu, hitokage, charizard, pachirisu];
const pokemonList2 = [eevee, piplup];
test(getStrongPokemon(pokemonList), [hitokage, charizard]);
test(getStrongPokemon(pokemonList2), [piplup]);