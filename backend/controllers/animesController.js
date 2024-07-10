const express = require("express");
const animes = express.Router();
const {
  getAllAnimes,
  getOneAnime,
  createOneAnime,
  updateOneAnime,
  deleteOneAnime,
} = require("../queries/animes");

//Write a GET route that retrieves all animes from the database and sends them to the client with a 200 status code
animes.get("/", async (req, res) => {
  try {
    TODO; //: Fix 42P01 Error
    const result = await getAllAnimes();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Write a POST route that takes user provided data from the request body and creates a new anime in the database. The route should respond with a 200 status code and the new anime.
animes.post("/", async (req, res) => {
  const { name, description } = req.body;
  try {
    //if the request body does not contain a name and description, or if the body's name or description have no length, respond with an error
    if (name.length === 0 || description.length === 0)
      throw new Error("Please provide a anime name and description");
    const result = await createOneAnime(name, description);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Write a PUT route that takes user provided data from the request body and updates an existing anime in the database. The route should respond with a 200 and the updated anime. The route should be able to handle a non-existent anime id.
//if the request body does not contain a name and description, or if the body's name or description have no length, respond with an error
animes.put("/:animeId", async (req, res) => {
  const { animeId } = req.params.animeId;
  const { name, description } = req.body;
  if (name.length === 0 || description === 0)
    throw new Error("Please Provdie a anime name and description");
  try {
    const result = updateOneAnime(animeId, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Write a DELETE route that deletes a single anime by id (provided by the client as a request param) from the database and responds with a 200 and the deleted anime data. The route should be able to handle a non-existent anime id.

animes.delete("/:animeId", async (req, res) => {
  const { animeId } = req.params.animeId;

  try {
    const result = await deleteOneAnime(animeId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
/* Instructions: Use the following prompts to write the corresponding routes. **Each** route should be able to catch server-side and user input errors(should they apply). Consult the test files to see how the routes and errors should work.*/

module.exports = animes;
