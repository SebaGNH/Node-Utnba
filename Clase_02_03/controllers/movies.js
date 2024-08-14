import movies from '../models/fileSystem/TestData.json' assert { type: 'json' };
import {Movie} from '../models/mondoDB.js/movie.js';
// const movies = []; // <-- para probar el 404

export const getAllMovies = (req, res) => {
    movies.length
        ?res
            .status(200)
            .json({ success: true, message: "List all movies", data: movies})
        :res
            .status(404)
            .json({ success: false, message: "Movies database empty"})
}

export const movieController = {
    getAllMoviesTestData(req, res) {
        movies.length
            ? res
                .status(200)
                .json({ success: true, message: "List all movies", data: movies})
            : res
                .status(404)
                .json({ success: false, message: "Movies database empty"})
    },
    async getAllMoviesMongo(req, res) {
        const movieCollection = await Movie.find() // peliculas de mongoDB
        res.send(movieCollection);
    },
    getByTitle(req, res) {
        // res.send(`Find movie by name ${req.query.title}`);
        const { title } = req.query;
        !title
            ? res
                .status(400)
                .json({ success: false, message: "Bad Request" })
            : res
                .status(200)
                .json({ success: true, message: `Find Movie ${title}` })
    },
    getById(req, res) {
        const { id } = req.params;
        !id
            ? res
                .status(400)
                .json({ success: false, message: "Bad Request" })
            : res
                .status(200)
                .json({ success: true, message: `Find Movie ${id}` })
    },
    postMovie0(req, res) {
        const {title, director, release, rating} = req.body;
        const newMovie = {title, director, release, rating};
        newMovie.save();
        // res.send("Create Movies");
    },
    postMovie(req, res) {
        const {title, director, release, rating} = req.body;
        const newMovie = new Movie({title, director, release, rating});
        newMovie.save()
            .then(() => res.status(201).send("Movie created successfully"))
            .catch(err => res.status(500).send(`Error: ${err.message}`));
    },
    patchMovie(req, res) {
        const id = req.params.id; // <-- otro modo para sacar el parámetro
        res.send(`Update Movies by id ${id}`);
    },
    deleteMovie(req, res) {
        const { id } = req.params;
        res.send(`Delete all Movies ${id}`);
    }
}
















