const request = require('supertest');
const app = require('../index');

describe('GET /', function() {
    it('respond with a 200', function(done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });

describe('POST /add', function() {
    it('respond with a 200', function(done) {
      request(app)
        .post('/add')
        .send({newtodo: 'writing a test'})
        .set('Accept', 'application/json')
        .expect(302)
        .end((err, res) => {
            if (err) done(err)
            else done();
        })
    });
  });