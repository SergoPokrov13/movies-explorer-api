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
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().integer().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(URL_REGEXP),
    trailerLink: Joi.string().required().pattern(URL_REGEXP),
    thumbnail: Joi.string().required().pattern(URL_REGEXP),
    movieId: Joi.number().integer().required(),
    nameRU: Joi.string(),
    nameEN: Joi.string(),
  }),
}), createCard);
cardRoutes.get('/', getCards);

module.exports = cardRoutes;
