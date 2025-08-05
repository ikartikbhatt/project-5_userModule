const { successResponseTemplate } = require("../modules/responseTemplate");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
async function createUser(req, res) {
  const { userName, userEmail, userPassword } = req.body;
  console.log(userName);

  const filePath = path.join(__dirname, "..", "utils", "userData.json");

  // Read and parse existing user data
  let userDataStore = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    userDataStore = fileContent ? JSON.parse(fileContent) : [];
  }

  const id = uuid.v4();

  //add date logic to check last updation date for user
  const createdOn = new Date().toString().split(" GMT")[0];

  const newUser = {
    id,
    userName,
    userEmail,
    userPassword,
    createdOn,
  };

  userDataStore.push(newUser); // object inside array --->

  // Save the entire array back
  fs.writeFileSync(filePath, JSON.stringify(userDataStore), "utf-8");

  return res.send(await successResponseTemplate(userName));
}

module.exports = createUser;
