module.exports = {

  attributes: {

    score: {
      type: 'number',
      required: true,
      min: 0,
      max: 5
    },
    body: {
      type: 'text',
      required: true
    },
    planet: {
      model: 'Planet',
      required: true
    }
  },
  validationMessages: {
    score: {
      required: 'Score is required',
      max: 'Invalid score. Max score value is 5.',
      min: 'Invalid score. Min score value is 0.'
    },
    body: {
      required: 'Body is required'
    },
    planet: {
      required: 'Planet is required'
    }
  }

};

