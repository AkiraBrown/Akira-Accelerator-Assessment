const db = require("../db/dbConfig");

const getAllAnimes = async () => {
  try {
    const animes = await db.any("SELECT * FROM animes");
    return animes;
  } catch (error) {
    return error;
  }
};

const getOneAnime = async (animeId) => {
  try {
    const anime = await db.oneOrNone(
      "SELECT * FROM animes WHERE id=$1",
      animeId
    );
    return anime;
  } catch (error) {
    return error;
  }
};

const createOneAnime = async (name, description) => {
  try {
    const newAnime = await db.one(
      "INSERT INTO animes (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    );
    return newAnime;
  } catch (error) {
    return error;
  }
};

const updateOneAnime = async (id, body) => {
  const { name, description } = body;
  try {
    const updatedAnime = await db.one(
      "UPDATE animes SET name=$1, description=$2 WHERE id=$3 RETURNING *",
      [name, description, id]
    );
    return updatedAnime;
  } catch (error) {
    return error;
  }
};

const deleteOneAnime = async (id) => {
  try {
    const deletedAnime = await db.oneOrNone(
      "DELETE FROM animes WHERE id=$1 RETURNING *",
      id
    );
    return deletedAnime;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAnimes,
  getOneAnime,
  createOneAnime,
  updateOneAnime,
  deleteOneAnime,
};
