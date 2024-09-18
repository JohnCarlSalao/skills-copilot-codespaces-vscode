// Create a web server that listens on port 3000.
// When you visit http://localhost:3000/comments, it should display a list of comments in a bulleted list.
// The comments should be stored in a separate file called comments.json.
// The comments should be read from the comments.json file and displayed in a bulleted list.
// The comments should be displayed in the order they were added to the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('comments.json', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        const comments = JSON.parse(data);
        let output = '<ul>';
        comments.forEach(comment => {
          output += `<li>${comment}</li>`;
        });
        output += '</ul>';
        res.end(output);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});