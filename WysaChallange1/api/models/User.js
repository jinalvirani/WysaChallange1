/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nickname: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      minLength: 8,
      custom: function (value) {
        // • be a string
        // • be at least 8 characters long
        // • contain at least one numeric
        // • contain at least one alphabet
        return _.isString(value) && value.length >= 8 && value.match(/[a-z]/i) && value.match(/[0-9]/);
      }
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password']);
  },
  beforeCreate: function (user, next) {
    user.nickname = user.nickname.toLowerCase();
    if (!user.password) { user.password = '@wysa1234'; }
    CipherService.hashPassword(user);
    next();
  },
};

