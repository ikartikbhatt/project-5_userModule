const { failureResponseTemplate } = require("../modules/responseTemplate");
const path = require("path");
const fs = require("fs");

async function userDeleteValidator(req, res, next) {
  if (req.body === undefined) {
    return res
      .status(400)
      .json(await failureResponseTemplate("Invalid request"));
  }

  const {
    userName, // still required
    name,
    mobile,
    age,
    bio,
    address,
    country,
    state,
    city,
    pincode,
  } = req.body;

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

  const filePath = path.join(__dirname, "..", "utils", "userData.json");

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileContent);

    const user = users.find((u) => u.userName === userName);
    if (!user) {
      return res
        .status(400)
        .json(
          await failureResponseTemplate("Username does not exist in database")
        );
    }
  }

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json(await failureResponseTemplate("Missing or invalid name"));
  }

  // Optional fields: if provided, validate type (allow "" for strings)
  if (mobile !== undefined && typeof mobile !== "string") {
    return res
      .status(400)
      .json(await failureResponseTemplate("Mobile must be a string"));
  }

  if (age !== undefined && typeof age !== "string") {
    return res
      .status(400)
      .json(await failureResponseTemplate("Age must be a number"));
  }

  if (bio !== undefined && typeof bio !== "string") {
    return res
      .status(400)
      .json(await failureResponseTemplate("Bio must be a string"));
  }

  if (address !== undefined && typeof address !== "string") {
    return res
      .status(400)
      .json(await failureResponseTemplate("Address must be a string"));
  }

  if (country !== undefined && typeof country !== "string") {
    return res
      .status(400)
      .json(await failureResponseTemplate("Country must be a string"));
  }

  if (state !== undefined && typeof state !== "string") {
    return res
      .status(400)
      .json(await failureResponseTemplate("State must be a string"));
  }

  if (city !== undefined && typeof city !== "string") {
    return res
      .status(400)
      .json(await failureResponseTemplate("City must be a string"));
  }

  if (pincode !== undefined && typeof pincode !== "string") {
    return res
      .status(400)
      .json(await failureResponseTemplate("Pincode must be a string"));
  }
  next();
}

module.exports = userDeleteValidator;
