const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Informe usuário e senha!");
    }

    const usuario = await app
      .db("usuarios")
      .where({ email: req.body.email })
      .first();

    if (!usuario) return res.status(400).send('Usuário não encontrado"');

    const isMatch = bcrypt.compareSync(req.body.password, usuario.password);
    if (!isMatch) return res.status(401).send("Email e/ou Senha inválidos!");

    const now = Math.floor(Date.now() / 1000);

    const payload = {
      id: usuario.id,
      name: usuario.name,
      email: usuario.email,
      admin: usuario.admin,
      iat: now,
      exp: now + 60 * 60 * 24 * 2,
    };

    res.json({
      token: jwt.encode(payload, authSecret),
    });
  };

  const validaToken = async (req, res) => {
    const userData = req.body || null;
    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);
        if (new Date(token.exp * 1000) > new Date()) {
          return res.json(token);
        }
      }
    } catch (e) {
      res.status(500).send("Desculpe, houve um erro");
    }
    res.send(false);
  };

  return { login, validaToken };
};
