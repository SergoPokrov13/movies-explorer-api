const { celebrate, Joi } = require('celebrate');
const express = require('express');
const { URL_REGEXP } = require('../utils/statusError');
const {
  createCard,
  deleteCard,
  getCards,
} = require('../controllers/movie');

const cardRoutes = express.Router();

cardRoutes.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex(),
  }),
}), deleteCard);

cardRoutes.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(URL_REGEXP),
  }),
}), createCard);
cardRoutes.get('/', getCards);

module.exports = cardRoutes;
