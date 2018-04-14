module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 128
    },
    swapi_id:{
      type: 'number',
      required: true
    },
    swapi: {
      type: 'json'
    },
    comments: {
      collection: 'Comment',
      via: 'planet'
    }
  },
  beforeCreate: function (values, cb) {
    var url = values.swapi.url;
    values.swapi_id = url.match(/\d+/g).map(Number)[0]
    cb();
  },
  validationMessages: {
    name: {
      required: 'Name is required',
      maxLength: 'The name that was provided was too long.'
    }
  }
};

