const { Router } = require("express");
const movieRouter = Router();

const { addMovie, listMovies, deleteMovie, updateMovie } = require("./movieControllers");

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.delete("/movie/:filterKey/:filterVal", deleteMovie);
// for example for delete: "http://local:5001/movie/title/Spiderman"
movieRouter.put("/movie", updateMovie);


module.exports = movieRouter;