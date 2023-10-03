/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  let out = []; // 出力
  const weapons = ["rock", "scissors", "paper"]; // 手持ち
  const play = (rounds, result = []) => {
    // 終了条件
    if (rounds < 1) {
      out.push(result);
      return;
    }
    // 再帰的なケース
    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];
      play(rounds - 1, result.concat(weapon)); // ラウンドを減少させる
    }
  };
  play(rounds);
  return out;
};

