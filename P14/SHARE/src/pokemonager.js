const allPokemon = window.allPokemon;

window.pokemonager = {
  findNames: () => {
    // 1問目のコードをここに書きましょう
    const names = allPokemon.map((pokemon) => pokemon["Name"]);
    return names;
  },

  findByResistance: (attack) => {
    // 2問目のコードをここに書きましょう
    const names2 = allPokemon.filter((pokemon) => pokemon["Resistant"].includes(attack));
    return names2;
  },

  findNamesByResistance: (attack) => {
    // 3問目のコードをここに書きましょう
    const names2 = allPokemon.filter((pokemon) => pokemon["Resistant"].includes(attack));
    const names3 = names2.map((pokemon) => pokemon["Name"]);
    return names3;
  },

  avgMaxCP: () => {
    // 4問目のコードをここに書きましょう
    const sum = allPokemon.length;
    const initialValue = 0;
    const cps = (allPokemon.filter((pokemon) => pokemon["MaxCP"]>=0)).map((pokemon) => pokemon["MaxCP"]);
    const sumcps = cps.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    return sumcps/sum;
  },

  countedWeaknesses: () => {
    // 5問目のコードをここに書きましょう
    //弱点リスト
    // const weaks = allPokemon.map((pokemon) => pokemon["Weaknesses"]);
    // //重複なくす
    // const weaks2 = weaks.filter((element, index) => (weaks.indexOf(element) === index));

    // 弱点リスト
    const weaknessesList = allPokemon.reduce((weaknesses, pokemon) => {
      pokemon.Weaknesses.forEach(weakness => {
        weaknesses[weakness] = (weaknesses[weakness] || 0) + 1;
      });
      return weaknesses;
    }, {});
    
    return weaknessesList;
  },
};
