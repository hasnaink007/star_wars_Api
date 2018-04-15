var supertest = require('supertest');
var Planet = require('../../../api/models/Planet');
var _ = require('lodash');
global.chai = require('chai');
global.should = chai.should();
var server = supertest.agent("http://localhost:1337");

describe('The PlanetController', function () {
  var planetId = 0;
  it('should create a planet', function (done) {
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

  it('should get a planet by id', function (done) {
      server.get('/api/planets/' + planetId)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (err, result) {
          if (err) {
            done(err);
          } else {
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

  it('should get a list of planets', function (done) {
    server.get('/api/planets/')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          result.body.should.have.property('success', true);
          result.body.data.should.be.an('array');
          done();
        }
      });
  });
});
