const { userUpdateTemplate } = require("../modules/responseTemplate");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
async function updateUser(req, res) {
  const {
    userName,
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

  const filePath = path.join(__dirname, "..", "utils", "userData.json");

  // Read and parse existing user data
  let userDataStore = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    userDataStore = fileContent ? JSON.parse(fileContent) : [];
  }

  const checkUser = userDataStore.find((u) => u.userName === userName);

  //add date logic to check last updation date for user
  const updatedOn = new Date().toString().split(" GMT")[0];

  if (checkUser) {
    // Build updated user object (preserve existing id)
    const updatedUser = {
      ...checkUser,
      name,
      mobile,
      age,
      bio,
      address,
      country,
      state,
      city,
      pincode,
      updatedOn,
    };

    // Update only the matched user in array
    const updatedUserDataStore = userDataStore.map((u) =>
      u.userName === userName ? updatedUser : u
    );

    // Save to file
    fs.writeFileSync(filePath, JSON.stringify(updatedUserDataStore));

    res.send(await userUpdateTemplate(userName));
  }
}

module.exports = updateUser;
