const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

app.db = db;

consign();

app.listen(4000, () => {
  console.log("Backend executando...");
});
