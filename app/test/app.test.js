// test/app.test.js
const chai = require('chai');
const expect = chai.expect;
const greet = require('../app');

describe('Greet Function', () => {
  it('should greet with "Hello, World!" when no name is provided', () => {
    const greeting = greet();
    expect(greeting).to.equal('Hello, World!');
  });

  it('should greet with the provided name', () => {
    const greeting = greet('Alice');
    expect(greeting).to.equal('Hello, Alice!');
  });
});
