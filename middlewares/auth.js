const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;
const UnauthorizedError = require('../errors/UnauthorizedError');

function auth(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization;
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'secret');
  } catch (err) {
    next(new UnauthorizedError('Вы не авторизованы'));
  }
  req.user = payload;
  next();
}

module.exports = auth;
