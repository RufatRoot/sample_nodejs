// app.js
function greet(name) {
  if (!name) {
    return 'Hello, World!';
  } else {
    return `Hello, ${name}!`;
  }
}

module.exports = greet;
