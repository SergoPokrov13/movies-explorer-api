const winston = require('winston');
const expressWinston = require('express-winston');

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: 'error.log', json: true }),
  ],
  format: winston.format.json(),
});

const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'request.log', json: true }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
