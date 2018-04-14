const swapi = require('swapi-node');

module.exports = {

  create: function(req, res, next){
    if (_.isUndefined(req.body.name))
      return res.badRequest('Name is required.');
    if (!_.isString( req.body.name) )
      return res.badRequest("Name must be string.");
    var params = {name: req.body.name};
    Planet.findOne(params).exec(function (err, planet) {
      if (err) return next(err);
      if(planet === undefined){
        swapi.get("http://swapi.co/api/planets/?search="+ req.body.name).then(function(result) {
          console.log(result);
          if(result.count == 0 )return res.badRequest(["Invalid Planet Name."]);
          params.swapi = result.results[0];
          Planet.create(params).exec(function (err, newPlanet) {
            if(err)
              res.serverError(err);
            res.created(newPlanet);
          });
        });
      }else
        res.created(planet);
    });
  },

  list: function(req, res, nex){
    Planet.find({}).exec(function (err, planets) {
      if (err) return next(err);
      res.ok(planets);
    })
  },

  show: function(req, res, next){
    var id = req.param('id');
    Planet.findOne({id: id}, function(err,data){
      if(data === undefined) return res.notFound("Planet Not Found.");
      if (err) return next(err);
      res.ok(data);
    });
  }
};

