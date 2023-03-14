const mongoose = require('mongoose');
const { URL_REGEXP, RU_REGEXP, EN_REGEXP } = require('../utils/statusError');

const movieSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => URL_REGEXP.test(v),
      message: 'Не правильный формат ссылки',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (v) => URL_REGEXP.test(v),
      message: 'Не правильный формат ссылки',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => URL_REGEXP.test(v),
      message: 'Не правильный формат ссылки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    validate: {
      validator: (v) => RU_REGEXP.test(v),
      message: 'Только буквы кириллицы',
    },
  },
  nameEN: {
    type: String,
    validate: {
      validator: (v) => EN_REGEXP.test(v),
      message: 'Только латинские буквы',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('card', movieSchema);
