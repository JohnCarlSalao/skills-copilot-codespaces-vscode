const http = require('http');

// Create a web server
http.createServer((req, res) => {
    // Write a response header
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Write a response body
    res.write('<h1>Welcome to the comments page</h1>');

    // End the response
    res.end();
}).listen(3000, () => {
    console.log('Server is running on port 3000');
});