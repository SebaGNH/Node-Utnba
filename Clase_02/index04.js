import express from 'express';
import { moviesRouter } from './routes/movies.routes.js';

const app = express();
const PORT = process.env.PORT ?? 8000; // process.env.PORT puerto designado por el sistema al crear el proyecto

app.listen(PORT, (err)=>{
    err
        ?console.log(`\nERROR: ${err.message}`)
        :console.log(`\nMENSAJE: corriendo en el puerto http://127.0.0.1:${PORT}/`);
})


app.use("/api/movies", moviesRouter);






