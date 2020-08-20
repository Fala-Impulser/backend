module.exports = (app) => {
  app.post("/login", app.api.autenticacao.login);
  app.post("/validaToken", app.api.autenticacao.validaToken);
  app.post("/registro", app.api.usuarios.save);

  app
    .route("/usuarios")
    .all(app.config.passport.authenticate())
    .get(app.api.usuarios.get);

  app
    .route("/usuarios/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.usuarios.getById)
    .put(app.api.usuarios.updateUser)
    .delete(app.api.usuarios.remove);
};
