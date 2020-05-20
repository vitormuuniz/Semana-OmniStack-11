const crypto = require("crypto"); //gerar um id aleatorio

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString("HEX");
}