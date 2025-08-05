async function successResponseTemplate(userName) {
  const template = {
    responseCode: "201",
    status: "success",
    message: `${userName} User created Successfully`,
  };
  return template;
}

async function failureResponseTemplate(clientmessage) {
  const template = {
    responseCode: "400",
    status: "failure",
    message: clientmessage,
  };
  return template;
}

async function userloginTemplate(userName) {
  const template = {
    responseCode: "201",
    status: "success",
    message: `${userName} User logged in Successfully`,
  };
  return template;
}

async function userDeleteTemplate(userName) {
  const template = {
    responseCode: "201",
    status: "success",
    message: `${userName} User delted Successfully`,
  };
  return template;
}

async function userUpdateTemplate(userName) {
  const template = {
    responseCode: "201",
    status: "success",
    message: `${userName} User Updated Successfully`,
  };
  return template;
}

module.exports = {
  successResponseTemplate,
  failureResponseTemplate,
  userloginTemplate,
  userDeleteTemplate,
  userUpdateTemplate,
};
