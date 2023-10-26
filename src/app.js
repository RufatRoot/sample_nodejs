// src/app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;



// // calculator.js

// function add(a, b) {
//     return a + b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   module.exports = { add, subtract };
  