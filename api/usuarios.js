const bcrypt = require("bcrypt");

module.exports = (app) => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validacoes;

  const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const save = async (req, res) => {
    const user = { ...req.body };

    if (req.params.id) user.id = req.params.id;

    try {
      existsOrError(user.nome, "Nome não informado");
      existsOrError(user.email, "E-mail não informado");
      existsOrError(user.password, "Senha não informada");
      existsOrError(user.confirmPassword, "Confirmação de senha inválida");
      equalsOrError(user.password, user.confirmPassword, "Senhas não conferem");

      const userFromDB = await app
        .db("usuarios")
        .where({ email: user.email })
        .first();

      if (!user.id) {
        notExistsOrError(userFromDB, "Usuário já cadastrado");
      }
    } catch (msg) {
      return res.status(400).send(msg);
    }

    user.password = encryptPassword(user.password);
    delete user.confirmPassword;

    if (user.id) {
      app
        .db("usuarios")
        .update(user)
        .where({ id: user.id })
        .then((_) => res.status(200).send("Usuário atualizado com sucesso"));
    } else {
      app
        .db("usuarios")
        .insert(user)
        .then((_) => res.status(200).send("Usuário adicionado com sucesso"))
        .catch((err) => res.status(500).send(err));
    }
  };

  const updateUser = async (req, res) => {
    const user = { ...req.body };

    if (req.params.id) user.id = req.params.id;

    try {
      existsOrError(user.nome, "Nome não informado");
      existsOrError(user.email, "E-mail não informado");

      const userFromDB = await app
        .db("usuarios")
        .where({ email: user.email })
        .first();

      if (!user.id) {
        notExistsOrError(userFromDB, "Usuário já cadastrado");
      }
    } catch (msg) {
      return res.status(400).send(msg);
    }

    if (user.id) {
      app
        .db("usuarios")
        .update(user)
        .where({ id: user.id })
        .then((_) => res.status(200).send("Usuário atualizado com sucesso"));
    } else {
      res.status(400).send("Id não encontrado");
    }
  };

  const get = (req, res) => {
    app
      .db("usuarios")
      .select("id", "nome", "email", "admin", "profissao")
      .then((usuarios) => res.json(usuarios))
      .catch((err) => res.status(500).send(err));
  };

  const getById = (req, res) => {
    app
      .db("usuarios")
      .select(
        "id",
        "nome",
        "email",
        "admin",
        "telefone",
        "cidade",
        "profissao",
        "avatar"
      )
      .where({ id: req.params.id })
      .then((usuarios) => res.json(usuarios))
      .catch((err) => res.status(500).send(err));
  };

  const remove = async (req, res) => {
    try {
      const rowsDeleted = await app
        .db("usuarios")
        .where({ id: req.params.id })
        .del();

      try {
        existsOrError(rowsDeleted, "Usuário não foi encontrado");
      } catch (msg) {
        return res.status(400).send(msg);
      }

      res.status(200).send("Deletado com sucesso");
    } catch (msg) {
      res.status(500).send(msg);
    }
  };

  return { save, get, remove, getById, updateUser };
};
