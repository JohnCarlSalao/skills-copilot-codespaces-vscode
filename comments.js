const http = require('http');

// Create a web server
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Welcome to the comments page</h1>');
    res.end();
}).listen(3000, () => {
    console.log('Server is running on port 3000');
}).on('error', (err) => {
    console.error('Error:', err);
});