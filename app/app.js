// Import the required modules
const http = require('http');

// Define the hostname and port for the server
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a 200 OK status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the "Hello, World!" message as the response body
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
