/**
 * CommentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: function(req, res){
    var params = {
      body: req.body.comment.body,
      score: req.body.comment.score,
      planet: req.params.id
    };
    Comment.create(params).exec(function (err, comment) {
      if(err)
        res.serverError(err);
      res.ok(comment);
    });
  },

  list: function(req, res){
    Planet.findOne({id: req.params.id}).populate('comments').exec(function (err, planet) {
      if(err)
        res.serverError(err);
      res.ok(planet.comments);
    });
  }
};

