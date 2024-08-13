if (true) { // ejecutamos node index.js
}
const http = require("http");
const port = process.env.PORT
http.createServer((req, res) => {
    const path = req.url.replace()
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("hola mundossss"); // pinta en la pantalla http://127.0.0.1:8000/
}).listen(8000,"127.0.0.1");
console.log("MENSAJE: corriendo en el puerto http://127.0.0.1:8000/"); // consola del la terminal


const express = require





