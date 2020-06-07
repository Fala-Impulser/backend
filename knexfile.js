// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    host: "banco-de-dados",
    database: "nome-do-banco",
    user: "usuario-do-banco",
    password: "senha-do-banco",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
