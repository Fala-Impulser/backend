// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    host: "localhost",
    database: "falaimpulser",
    user: "pguser",
    password: "pgpassword",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
