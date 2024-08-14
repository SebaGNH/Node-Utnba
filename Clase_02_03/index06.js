import express from 'express';
import 'dotenv/config';

import '../config/db.js';
import { moviesRouter } from './routes/movies.routes.js';


const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use("/api/movies", moviesRouter);

app.listen(PORT, (err)=>{
    err
        ?console.log(`\nERROR: ${err.message}`)
        :console.log(`\nMENSAJE: corriendo en el puerto http://127.0.0.1:${PORT}/`);
})

