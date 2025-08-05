const { failureResponseTemplate } = require("../modules/responseTemplate");
const fs=require('fs')
async function userLoginValidator(req, res, next) {
  if (req.body === undefined) {
    return res
      .status(400)
      .json(await failureResponseTemplate("Invalid request"));
  }
  const { userEmail, userPassword } = req.body;
  const data = req.body;
  const keys = Object.keys(data);

  if (keys[0] !== "userEmail" || keys[1] !== "userPassword") {
    return res
      .status(400)
      .json(
        await failureResponseTemplate(
          "kindly use userEmail,userPassword as the json keys !"
        )
      );
  }

  if (Object.keys(data).length > 2 || Object.keys(data).length < 2) {
    return res
      .status(400)
      .json(await failureResponseTemplate("Invalid request body"));
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
  
  

  next();
}

module.exports = userLoginValidator;
