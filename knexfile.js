// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    host: "mysql380.umbler.com",
    database: "fala-impulser",
    port: "41890",
    user: "fala-impulser",
    password: "falaimpulser",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
