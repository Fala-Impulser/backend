module.exports = (app) => {
  app.post("/login", app.api.auth.login);
  app.post("/validateToken", app.api.auth.validateToken);

  app
    .route("/users")
    .post(app.api.users.save)
    .put(app.api.users.save)
    .delete(app.api.users.remove)
    .get(app.api.users.get);
};
