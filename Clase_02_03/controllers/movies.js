import movies from '../models/fileSystem/TestData.json' assert { type: 'json' };

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
    getAllMovies(req, res) {
        movies.length
            ? res
                .status(200)
                .json({ success: true, message: "List all movies", data: movies})
            : res
                .status(404)
                .json({ success: false, message: "Movies database empty"})
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
    }
}
















