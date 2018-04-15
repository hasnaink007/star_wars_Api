var supertest = require('supertest');
var Planet = require('../../../api/models/Planet');
var _ = require('lodash');
global.chai = require('chai');
global.should = chai.should();
var server = supertest.agent("http://localhost:1337");
describe('The PlanetController', function () {
  var planetId;
  before(function(done) {
    server
      .post('/api/planets')
      .set('Accept', 'application/json')
      .send({"name": "Yavin IV"})
      .expect(201)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          planetId = result.body.data.id;
          result.body.should.be.an('object');
          result.body.should.have.property('success', true);
          result.body.data.should.have.property('id');
          result.body.data.should.have.property('name', 'Yavin IV');
          result.body.data.should.have.property('swapi');
          result.body.data.should.have.property('swapi_id');
          done();
        }
      });
  });

  it('should create a comment of a given planet', function (done) {
    server
      .post('/api/planets/'+ planetId +'/comments')
      .set('Accept', 'application/json')
      .send({"body": "Yavin IV", score: 4})
      .expect(201)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          planet = result;
          result.body.should.be.an('object');
          result.body.should.have.property('success', true);
          done();
        }
      });
  });

  it('should get a list of comments of a given planet', function (done) {
    server.get('/api/planets/'+ planetId + '/comments')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          result.body.should.be.an('object');
          result.body.should.have.property('success', true);
          result.body.data.should.be.an('array');
          done();
        }
      });
  });
});
