const router = require('express').Router();
const movieRoutes = require('./movie');
const userRoutes = require('./users');
const NotFoundError = require('../errors/NotFoundError');

router.use('/api/users', userRoutes);
router.use('/api/movie', movieRoutes);
router.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
