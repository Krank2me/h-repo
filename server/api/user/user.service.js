const User = require("./user.model");

async function createUser(user) {
  const newUser = await User.create(user);
  return newUser;
}

module.exports = createUser;
