// test/app.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js'); // Import the Express app

const { expect } = chai;

chai.use(chaiHttp);

describe('Simple Node.js App', () => {
  it('should return "Hello, World!" when GET /', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});
