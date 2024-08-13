import { movies } from '../apiDataTest/TestData.js';
import http from 'node:http';

const port = process.env.PORT ?? 8000; // El puerto será "process.env.PORT" o "8000" por defecto

http.createServer((req, res) => {

    // console.log(req.url); // Muestra la ruta que se agrega en el navegador después de http://127.0.0.1:8000/

    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase(); // Remueve el trailing slash y convierte a minúsculas

    switch (path) {
        case "":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`<h1>Homepage</h1>`);
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`<h1>About</h1>`);
            break;
        case "/movies":
            res.writeHead(200, { "Content-Type": "text/html" });
            // res.end();
            res.end(`<pre>${JSON.stringify(movies, null, 2)}</pre>`);
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(`<h1>404 Not Found</h1>`);
            break;
    }

}).listen(port, (err)=>{
    !err
        ?console.log(`MENSAJE: corriendo en el puerto http://127.0.0.1:${port}/`)
        :console.log(`ERROR: ${err}`);
});


