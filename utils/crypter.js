const bcrypt = require('bcrypt');

const crypter = {};
const saltRounds = process.env.SALT_ROUNDS;

crypter.encryptPassword = async plainInPassword => {
  const hashPassword = await bcrypt.hash(plainInPassword, saltRounds);
  return hashPassword;
};

crypter.comparePasswords = async (inUserPassword, savedUserPassword) => {
  try {
    return await bcrypt.compare(inUserPassword, savedUserPassword);
  } catch (error) {
    //Here can handle in a better way this error -- Camilo 11/15/2019
    console.log(error);
  }
};

module.exports = crypter;