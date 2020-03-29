const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let response = {
            name: 'Miguel',
            age: 44,
            url: req.url
        }

        res.write(JSON.stringify(response));
        //res.write('Hola mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');