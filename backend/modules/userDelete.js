const { userDeleteTemplate } = require("../modules/responseTemplate");
const path = require("path");
const fs = require("fs");

async function deleteUser(req, res) {
  const { userName } = req.body;
  const filePath = path.join(__dirname, "..", "utils", "userData.json");

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileContent);

    const updatedUserList = users.filter((u) => u.userName !== userName);

    fs.writeFileSync(filePath, JSON.stringify(updatedUserList), "utf-8");

    return res.send(await userDeleteTemplate(userName));
  }
}

module.exports = deleteUser;
