var _ = require('lodash');
module.exports = {
  create: function(req, res){
    var allowedParameters = ["body", "score"];
    var data = _.pick(req.body, allowedParameters);
    data.planet = req.params.id;
    if (_.isUndefined(data.body))
      return res.badRequest(['Body is required.']);
    if (!_.isInteger(data.score) || (data.score < 0 || data.score > 5))
      return res.badRequest(["Score must be Integer and between 0 and 5."]);
    Comment.create(data).exec(function (err, comment) {
      if(err)
        res.serverError(err);
      res.created(comment);
    });
  },

  list: function(req, res, next){
    Planet.findOne({id: req.params.id}).populate('comments').exec(function (err, planet) {
      if(err) next(err);
      if (_.isUndefined(planet)) res.notFound(['Planet Not Found.']);
      res.ok(planet.comments);
    });
  }
};

