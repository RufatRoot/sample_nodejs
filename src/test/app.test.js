// test/test.js
const request = require('supertest');
const app = require('./src/app.js');

describe('GET /', () => {
  it('responds with "Hello, Express!"', (done) => {
    request(app)
      .get('/')
      .expect('Hello, Express!', done);
  });
});


// // test-calculator.js

// const { add, subtract } = require('../app.js');
// const chai = require('chai');
// const expect = chai.expect;

// describe('Calculator', () => {
//   describe('add', () => {
//     it('should return the sum of two numbers', () => {
//       expect(add(1, 2)).to.equal(3);
//       expect(add(-1, 2)).to.equal(1);
//     });
//   });

//   describe('subtract', () => {
//     it('should return the difference between two numbers', () => {
//       expect(subtract(5, 3)).to.equal(2);
//       expect(subtract(2, 2)).to.equal(0);
//     });
//   });
// });
