// test/app.test.js
const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('Node.js Web App', () => {
  it('should respond with "Hello, World!" on / GET', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});
