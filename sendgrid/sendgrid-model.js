const knex = require("knex");

const db = require("../data/db-config.js");

module.exports = {
  find,
  create,
  findById
};

function find() {
  return db("emails");
}

async function create(email) {
  const [id] = await db("emails").insert(email, "id");

  return findById(id);
}

function findById(id) {
  return db("emails")
    .where({ id })
    .first();
}
