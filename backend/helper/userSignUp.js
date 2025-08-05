const createUser = require("../modules/createUser");

async function userSignUp(req, res) {
  createUser(req, res);
}

module.exports = userSignUp;
