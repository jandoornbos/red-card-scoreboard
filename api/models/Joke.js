/**
 * Joke.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    joke: {
      type: 'string',
      required: true
    },

    who: {
      model: 'user'
    },

    votes: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    }
  }

};

