const deleteUser = require("../modules/userDelete");
async function userDelete(req, res) {
  deleteUser(req, res);
}

module.exports = userDelete;
