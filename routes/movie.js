const { celebrate, Joi } = require('celebrate');
const express = require('express');
const { URL_REGEXP, RU_REGEXP, EN_REGEXP } = require('../utils/statusError');
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

cardRoutes.post('/', express.json(), celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(2).max(30),
    director: Joi.string().required().min(1).max(30),
    duration: Joi.string().required().min(2).max(30),
    year: Joi.number().required(),
    description: Joi.string().required().min(2).max(30),
    image: Joi.string().required().pattern(URL_REGEXP),
    trailerLink: Joi.string().required().pattern(URL_REGEXP),
    thumbnail: Joi.string().required().pattern(URL_REGEXP),
    nameRU: Joi.string().required().pattern(RU_REGEXP),
    nameEN: Joi.string().required().pattern(EN_REGEXP),
  }),
}), createCard);
cardRoutes.get('/', getCards);

module.exports = cardRoutes;
