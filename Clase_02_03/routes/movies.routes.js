import { Router } from 'express';
import { getAllMovies } from '../controllers/movies.js';
import { movieController } from '../controllers/movies.js';

export const moviesRouter = Router();

//sin controller
moviesRouter.get("/films", (getAllMovies));

//usando controller
moviesRouter.get("/test", movieController.getAllMoviesTestData);
moviesRouter.get("/", movieController.getAllMoviesMongo);

// serch
moviesRouter.get("/s", movieController.getByTitle); // api/movies/s?title=Inception

// buscar por id
moviesRouter.get("/:id", movieController.getById);

// Crear película
moviesRouter.post("/", movieController.postMovie);

// Actualizar
moviesRouter.patch("/:id", movieController.patchMovie);

// Eliminar
moviesRouter.delete("/:id", movieController.deleteMovie);









