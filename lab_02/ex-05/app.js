const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //updateWeb(res, 'Slot Machine\n', 200);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Slot Machine\n');

    if(req.url === '/play'){
        console.log('playing....');
    }
    else if(req.url === '/spin'){
        console.log('spinning....');
    }
    else{
        console.log('Please play or spin.');
    }

    function updateWeb(res, message, statusCode){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Slot Machine\n');
    }
});


server.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
});
