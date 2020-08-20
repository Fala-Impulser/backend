module.exports = (app) => {
  app.post("/login", app.api.autenticacao.login);
  app.post("/validaToken", app.api.autenticacao.validaToken);
  app.post("/registro", app.api.usuarios.save);
};
