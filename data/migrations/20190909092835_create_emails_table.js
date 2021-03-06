exports.up = function(knex) {
  return knex.schema.createTable("emails", tbl => {
    tbl.increments();
    tbl.string("to", 128).notNullable();
    tbl.string("from", 128).notNullable();
    tbl.string("subject", 128).notNullable();
    tbl.string("text").notNullable();
    tbl.string("phone", 128);
    tbl.string("html").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("emails");
};
