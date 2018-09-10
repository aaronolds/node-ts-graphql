import request from 'supertest';
import app from '../src/index'; // If I don't include the app it will fail
import chai from 'chai';
const expect = chai.expect;

describe('test', function() {
  it('should return 200', function(done) {
    // <= Pass in done callback
    request(app)
      .get('/graphql')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res.status).to.eq(200);
        done(); // <= Call done to signal callback end
      });
  });
});
