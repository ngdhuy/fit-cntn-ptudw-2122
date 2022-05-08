const http = require('http'); 

const host = '127.0.0.1'; // localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-type', 'text/html'); 
  res.end('<h1>Hello world!!!</h1>');
});


server.listen(port, host, () => {
  console.log(`Server is running at https://${host}:${port}`);
});