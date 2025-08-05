const userLogin = require("../modules/loginUser");

async function loginUser(req, res) {
  userLogin(req, res);
}

module.exports = loginUser;
