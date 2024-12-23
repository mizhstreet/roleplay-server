const jwt = require("jsonwebtoken");

function signToken(payload) {
  return jwt.sign(payload, "abvcxxvcs");
}

function verifyToken(token) {
  return jwt.verify(token, "abvcxxvcs");
}

module.exports = {
  signToken,
  verifyToken,
};
