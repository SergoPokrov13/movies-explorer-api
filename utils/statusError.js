const CREATED_CODE = 201;
const SERVER_ERROR_CODE = 500;
const URL_REGEXP = /^(https?):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])$/;
const RU_REGEXP = /[а-яА-ЯёЁ]/;
const EN_REGEXP = /[a-zA-Z]/;
module.exports = {
  CREATED_CODE, SERVER_ERROR_CODE, URL_REGEXP, RU_REGEXP, EN_REGEXP,
};
