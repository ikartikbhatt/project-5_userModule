const {
  userloginTemplate,
  failureResponseTemplate,
} = require("../modules/responseTemplate");
const path = require("path");
const fs = require("fs");

async function userLogin(req, res) {
  const { userEmail, userPassword } = req.body;

  const filePath = path.join(__dirname, "..", "utils", "userData.json");

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileContent);

    const user = users.find(
      (u) => u.userEmail === userEmail && u.userPassword === userPassword
    );

    if (user) {
      // console.log("Login successful!");
      return res.send(await userloginTemplate(user.userName));
    } else {
      // console.log("Invalid credentials");
      return res
        .status(400)
        .send(await failureResponseTemplate("Invalid credentials"));
    }
  } else {
    return res
      .status(400)
      .send(await failureResponseTemplate("User data not found"));
  }
}
module.exports = userLogin;
