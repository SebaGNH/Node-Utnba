import { Router } from 'express';

export const moviesRouter = Router();

moviesRouter.get("/", (req, res) => res.send("List all Movies")); // "/api/movies es la ruta a la que llegué originalmente
moviesRouter.get("/:id", (req, res) => res.send("List movie by id"));

moviesRouter.post("/", (req, res) => res.send("Create Movies"));

moviesRouter.patch("/:id", (req, res) => res.send("Update Movies"));

moviesRouter.delete("/:id", (req, res) => res.send("Delete all Movies"));

// http://localhost:8000/api/movies vemos las peticioens en postman





