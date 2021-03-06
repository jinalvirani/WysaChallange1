/**
 * UserQuestionAnswer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      model: 'user'
    },
    question: {
      model: 'QuestionTemplate'
    },
    answer: {
      model: 'options'
    },
    timeStamp: {
      type: 'string'
    },
    sleepingHours: {
      type: 'number',
      custom: function (value) {
        // • Should be between 1 to 10.
        return value >= 1 && value <= 10;
      }
    }
  },

};

