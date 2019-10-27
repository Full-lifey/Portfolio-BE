exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.string("title", 128).notNullable();
    tbl.string("description", 512).notNullable();
    tbl.string("imageURL").notNullable();
    tbl.string("deployment", 512).notNullable();
    tbl.string("repo", 512).notNullable();
    tbl.string("demo", 256);
    tbl.string("preview", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
