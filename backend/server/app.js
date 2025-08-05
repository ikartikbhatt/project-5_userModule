const express = require("express");
const { userRoutes } = require("../routes/userRoutes");
const app = express();
const cors = require("cors");

//EXPRESS PARSER--->
app.use(express.json());

//CORS
app.use(cors());

// Parse URL-encoded bodies (e.g., from HTML form submissions)
app.use(express.urlencoded({ extended: true }));

//USER ROUTES --->
app.use("/user", userRoutes);

//SERVER INIT -->
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
