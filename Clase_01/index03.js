import { movies } from '../apiDataTest/TestData.js';
import express from 'express';

const app = express();
const port = process.env.PORT ?? 8000;

app.listen(port, (err)=>{
    !err
        ?console.log(`\nMENSAJE: corriendo en el puerto http://127.0.0.1:${port}/`)
        :console.log(`\nERROR: ${err}`);
})

app.get("/",(req, res)=>{
    res.send(`<h1>Homepage</h1>`);
})
app.get("/",(req, res)=>{
    res.send(`<h1>Homepage</h1>`);
})
app.get("/about",(req, res)=>{
    res.send(`<h1>About</h1>`);
})
app.get("/movies",(req, res)=>{
    res.send(`<pre>${JSON.stringify(movies, null, 2)}</pre>`);
})

// es lo mismo que en index02, pero en expres
