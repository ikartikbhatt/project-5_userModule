const express = require("express").Router();
const route = express;

//REQUIRE USERSIGNUP VALIDATOR
const userSignUpValidator = require("../validator/userSignUpValidator");

//REQUIRE USERLOGIN VALIDATOR
const userLoginValidator = require("../validator/userLoginValidator");

//REQUIRE USERDELETE VALIDATOR
const userDeleteValidator = require("../validator/userDeleteValidator");

//REQUIRE USERUPDATE VALIDATOR
const userUpdateValidator = require("../validator/userUpdateValidator");




//REQUIRE USERSIGNUP
const userSignUp = require("../helper/userSignUp");

//REQUIRE USERLOGIN
const userLogin = require("../helper/userLogin");

//REQUIRE USERDELETE
const userDelete= require("../helper/userDelete");

//REQUIRE USERUPDATE
const userUpdate= require("../helper/userUpdate");



//USER SIGNUP ROUTE---->
route.post("/userSignUp", userSignUpValidator, userSignUp);

//USER LOGIN ROUTE---->
route.post("/userlogin", userLoginValidator, userLogin);

//USER DELTE ROUTE--->
route.post("/userDelete",userDeleteValidator,userDelete);

//USER UPDATE ROUTE--->
route.post("/updateUserDetails",userUpdateValidator,userUpdate);





module.exports = { userRoutes: route };
