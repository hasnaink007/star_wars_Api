/**
 * PlanetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: function(req, res){
    var params = {
      name: req.body.planet.name
    };
    Planet.create(params).exec(function (err, planet) {
      if(err)
        res.serverError(err);
      res.ok(planet);
    });
  },

  list: function(req, res){
    Planet.find({}).exec(function (err, planets) {
      if(err)
        res.serverError(err);
      res.ok(planets);
    })
  },

  show: function(req, res){
    var id = req.param('id');
    Planet.findOne({id: id}).populate('comments').exec(function(err,data){
      if(err)
        res.serverError(err);
      res.ok(data);
    });
  }


};

