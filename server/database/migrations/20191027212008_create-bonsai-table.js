exports.up = function(knex) {
  return knex.schema
    .createTable("bonsai", table => {
      table.increments();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.integer("age").notNullable();
      table.enu("type", ["indoor", "outdoor"]);
      table.integer("size").notNullable();
      table.integer("price").notNullable();
      table.timestamps(true, true);
    })
    .createTable("bonsai_images", table => {
      table.increments();
      table
        .integer("bonsai_id")
        .references("id")
        .inTable("bonsai")
        .onDelete("CASCADE")
        .notNullable();
      table.string("public_id").notNullable();
      table.string("image").notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("bonsai_images").dropTable("bonsai");
};
