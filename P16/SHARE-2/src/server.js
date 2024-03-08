const pokeData = require("./data");

const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  const express = require("express");
  const app = express();

  // pokeDataに格納されている全てのデータを「そのまま」表示するAPI
  app.get("/api/sample", (req, res) => {
    res.send(pokeData);
  });

  // ↓↓↓↓ 宿題のプログラムは、ここより下に書く

  app.get("/api/pokemon", (req, res) => {
    const limit = Number(req.query.limit);
    let result = pokeData.pokemon;

    if (limit) {
      result = result.slice(0, limit);
    }
    res.send(result);
  });

  app.get("/api/pokemon/:id", (req, res) => {
    const id = req.params.id;
    let result = pokeData.pokemon[id - 1];
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Not Found");
    }
  });

  app.post("/api/pokemon", (req, res) => {
    pokeData.pokemon.push({ id, name });
    res.status(201).send({ id, name });
    // res.send(pokeData.pokemon.push({}))
  });

  app.get("api/types", (req, res) => {
    const result = pokeData.types;
    let type = pokeData.pokemon[type];
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Not Found");
    }
  });

  // ↑↑↑↑ 宿題のプログラムは、ここより上に書く

  // '/'のルーティングは、その他のAPIのプログラムよりも下に記載
  app.use("/", (req, res) => {
    console.log("Hello, express");

    res.send(`
    <html>
        <body>
            <h1>Let's make Pokemon API</h1>
        </body>
    </html>
    `);
  });

  return app;
};

module.exports = { setupServer };
