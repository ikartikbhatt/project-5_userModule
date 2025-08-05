const { failureResponseTemplate } = require("../modules/responseTemplate");
const path = require("path");
const fs = require("fs");

async function userDeleteValidator(req, res, next) {
  if (req.body === undefined) {
    return res
      .status(400)
      .json(await failureResponseTemplate("Invalid request"));
  }
  const { userName } = req.body;
  const data = req.body;
  const keys = Object.keys(data);

  if (keys[0] !== "userName") {
    return res
      .status(400)
      .json(
        await failureResponseTemplate("kindly use userName as the json keys !")
      );
  }

  if (userName.trim() === "") {
    return res
      .status(400)
      .json(await failureResponseTemplate("userName cannot be empty"));
  }

  if (userName.length < 3 || userName.length > 20) {
    return res
      .status(400)
      .json(
        await failureResponseTemplate(
          "username must be between 3 and 20 characters"
        )
      );
  }

  if (Object.keys(data).length > 1 || Object.keys(data).length < 1) {
    return res
      .status(400)
      .json(await failureResponseTemplate("Invalid request body"));
  }

  const filePath = path.join(__dirname, "..", "utils", "userData.json");

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileContent);

    const user = users.find((u) => u.userName === userName);
    if(!user){
      return res
      .status(400)
      .json(await failureResponseTemplate("Username does not exist in database"));
    }   
  }




  next();
}

module.exports = userDeleteValidator;
