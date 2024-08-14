import { Router } from 'express';
import { getAllMovies } from '../controllers/movies.js';
import { movieController } from '../controllers/movies.js';

export const moviesRouter = Router();

//sin controller
moviesRouter.get("/films", (getAllMovies));

//usando controller
moviesRouter.get("/", movieController.getAllMovies);

// serch
moviesRouter.get("/s", movieController.getByTitle); // api/movies/s?title=Inception






moviesRouter.get("/:id", (req, res) => {
    res.send(`List movie by id ${req.params.id}`);
});
// req.params.id <-- extraemos el parámetro id

moviesRouter.post("/", (req, res) => res.send("Create Movies"));

moviesRouter.patch("/:id", (req, res) => {
    const id = req.params.id; // <-- otro modo para sacar el parámetro
    res.send(`Update Movies by id ${id}`);
});

moviesRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Delete all Movies ${id}`);
});









