const updateUser = require("../modules/updateUser");

async function userUpdate(req, res) {
  updateUser(req, res);
}

module.exports = userUpdate;