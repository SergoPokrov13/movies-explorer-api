const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле name должно быть заполнено!'],
    minlength: [2, 'Строка должна содержать как минимум 2 символа'],
    maxlength: [30, 'Строка не должна первышать 30 символов'],
  },
  email: {
    type: String,
    required: [true, 'Поле email должно быть заполнено!'],
    unique: true,
    validate: {
      validator: (email) => { validator.isEmail(email); },
      message: 'Указан не корректный email',
    },
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
});
module.exports = mongoose.model('user', userSchema);
