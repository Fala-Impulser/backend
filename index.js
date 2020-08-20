const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

app.db = db;

consign()
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api/validacoes.js")
  .then("./api")
  .then("./config/rotas.js")
  .into(app);

app.listen(4001, () => {
  console.log("Backend executando...");
});
