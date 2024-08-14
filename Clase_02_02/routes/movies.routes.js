import { Router } from 'express';
// http://localhost:8000/api/movies vemos las peticioens en postman
export const moviesRouter = Router();

moviesRouter.get("/", (req, res) => {
    res.send("List all Movies");
});

// serch
moviesRouter.get("/s", (req, res) => {
    res.send(`Find movie by name ${req.query.title}`);
});//   http://localhost:8000/api/movies/s?title=matrix


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









