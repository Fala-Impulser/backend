exports.up = function (knex) {
  return knex.schema.createTable("usuarios", (table) => {
    table.increments("id").primary();
    table.string("nome").notNull();
    table.string("email").notNull().unique();
    table.string("password").notNull();
    table.string("avatar");
    table.string("telefone");
    table.string("profissao");
    table.string("cidade").notNull();
    table.boolean("admin").notNull().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("usuarios");
};
