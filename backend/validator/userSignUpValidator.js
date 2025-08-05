const { failureResponseTemplate } = require("../modules/responseTemplate");
const fs=require('fs')
const path=require('path')


async function userSignUpValidator(req, res, next) {
  if (req.body === undefined) {
    return res
      .status(400)
      .json(await failureResponseTemplate("Invalid request"));
  }
  const { userName, userEmail, userPassword } = req.body;
  const data = req.body;
  const keys = Object.keys(data);
  
  if (keys[0]!=='userName' || keys[1]!=='userEmail'||keys[2]!=='userPassword') {
    return res
      .status(400)
      .json(await failureResponseTemplate("kindly use userName,userEmail,userPassword as the json keys !"));
  }

  if (Object.keys(data).length > 3 || Object.keys(data).length < 3) {
    return res
      .status(400)
      .json(await failureResponseTemplate("Invalid request body"));
  }

  if (userName.trim() === "") {
    return res
      .status(400)
      .json(await failureResponseTemplate("username cannot be empty"));
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

  if (userEmail.trim() === "") {
    return res
      .status(400)
      .json(await failureResponseTemplate("userEmail cannot be empty"));
  }

  if (!userEmail.includes("@gmail.com")) {
    return res
      .status(400)
      .json(await failureResponseTemplate("email must be a valid Gmail email"));
  }

  if (userPassword.trim() === "") {
    return res
      .status(400)
      .json(await failureResponseTemplate("userPassword cannot be empty"));
  }

  if (userPassword.length < 8 || userPassword.length > 20) {
    return res
      .status(400)
      .json(
        await failureResponseTemplate(
          "password must be between 8 and 20 characters"
        )
      );
  }

  const filePath = path.join(__dirname, "..", "utils", "userData.json");
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileContent);

    const user = users.find(
      (u) => u.userName === userName);

    if (user) {
       return res
      .status(400)
      .json(
        await failureResponseTemplate(
          "user already exists"
        )
      );
          
    }
  }
  next();
}

module.exports = userSignUpValidator;
