/**
 * Planet.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 128
    },
    // lastName: {
    //   type: 'string',
    //   size: 128
    // },
    comments: {
      collection: 'Comment',
      via: 'planet'
    }
  },

};

