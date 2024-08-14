import { Schema, model } from "mongoose";

// Mongo DB Schema
// Validaciones de Mongoose
const movieSchema = Schema({
    "title": { type: String, required: true },
    "director": { type: String, required: false },
    "release": { type: Number, required: false },
    "rating": { type: Number, default: 4 },
})

export const Movie = model("Movie", movieSchema);

