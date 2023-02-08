const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3005 } = process.env;
const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/bitfilmsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: false,
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});