const express = require('express');
const { celebrate, Joi } = require('celebrate');
const {
  updateUser,
  getUserInfo,
} = require('../controllers/users');

const userRoutes = express.Router();

userRoutes.get('/me', getUserInfo);

userRoutes.patch('/me', express.json(), celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(2).max(30),
    name: Joi.string().required().min(2).max(30),
  }),
}), updateUser);

module.exports = userRoutes;
