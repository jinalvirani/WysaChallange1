var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
module.exports = {
  secret: sails.config.custom.jwtSecretKey,

  /**
   * Hash the password field of the passed user.
   */
  hashPassword: function (user) {
    if (user.password) {
      user.password = bcrypt.hashSync(user.password, 10);
    }
  },

  /**
   * Create a token based on the passed user
   * @param user
   */
  createToken: function (user) {
    return jwt.sign(
      {
        user: {
          id: user.id,
          nickname: user.nickname
        },
      },
      this.secret,
      { expiresIn: 5 * 24 * 60 * 60 }
    );
  },

  verifyJwtToken: function (token, callback) {
    return jwt.verify(token, sails.config.custom.jwtSecretKey, callback);
  },
};
