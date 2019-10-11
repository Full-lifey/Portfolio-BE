const knex = require("knex");

const db = require("../data/db-config.js");

module.exports = {
  find,
  add,
  findById,
  update,
  remove
};

function find() {
  return db("projects").orderBy("id", "desc");
}

async function add(project) {
  const [id] = await db("projects").insert(project, "id");

  return findById(id);
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

async function update(id, changes) {
  const updatedProject = await db("projects")
    .update(changes)
    .where({ id });

  return findById(id);
}

function remove(id) {
  return db("projects")
    .del()
    .where({ id });
}
