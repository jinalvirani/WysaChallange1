/**
 * Options.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    optionText: {
      type: 'string'
    },
    question: {
      model: 'questiontemplate'
    }
  },

};

