const http = require('http'); // Node standard library

// req: request object, res: response object
http.createServer((req, res) => {
  // This callback runs every time a request hits the server.
  console.log( `Serving request: ${ req.method } ${ req.url }` ); // Crude way to create logs

  res.writeHeader(200, {'Content-Type': 'text/plain'});

  // This is terribly tedious
  if (req.url === '/') {
    res.end('Hello World');
  } else if (req.url === '/groucho') {
    res.end('Hello from Groucho');
  } else {
    res.end('Hello from nobody in particular');
  }

}).listen(1337);

console.log('Server is running at http://localhost:1337');
