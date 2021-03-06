/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
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

};

