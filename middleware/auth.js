const colors = require("colors");

//Authenticaion
exports.auth = (req, res, next) => {
  console.log("Checking authentication...".inverse);
  next();
};
//Authorization
exports.protect = (req, res, next) => {
  console.log("Checking authorixation...".inverse);
  next();
};
