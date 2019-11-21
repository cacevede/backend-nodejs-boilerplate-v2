const jwt = require('jsonwebtoken');

const tokenGenerator = {};

tokenGenerator.generateToken = async (userName, userPassword) => {
  const payloadTokenData = {
    check: true,
    userName: userName,
    userPassword: userPassword
  };

  try {
    const token = await jwt.sign(
      payloadTokenData,
      process.env.AUTH_JWT_SECRET,
      {
        expiresIn: process.env.EXPIRE_JWT_TOKEN_TIME
      }
    );
    
    return token;
  } catch (error) {
    //Here can handle in a better way this error -- Camilo 11/15/2019
    console.log(error);
  }
};

module.exports = tokenGenerator;