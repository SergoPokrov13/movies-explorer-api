const router = require('express').Router();
const movieRoutes = require('./movie');
const userRoutes = require('./users');
const NotFoundError = require('../errors/NotFoundError');

router.use('/users', userRoutes);
router.use('/movie', movieRoutes);
router.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
