module.exports = (app) => {
  app.post("/login", app.api.auth.login);
  app.post("/validateToken", app.api.auth.validateToken);

  app.route("/users").post(app.api.users.save).get(app.api.users.get);

  app
    .route("/user/:id")
    .put(app.api.users.save)
    .get(app.api.users.get)
    .delete(app.api.users.remove);
};
