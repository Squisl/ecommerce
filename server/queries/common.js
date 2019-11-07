const database = require("../database");

// Common CRUD queries
const create = table => async data => {
  const result = await database.table(table).insert(data, ["*"]);

  return result[0];
};

const read = table => async data => {
  const result = await database
    .table(table)
    .select()
    .where(data);

  return result;
};

const update = table => async (criteria, data) => {
  console.log("criteria", criteria);
  console.log("data", data);
  const result = await database
    .table(table)
    .update(data)
    .where(criteria)
    .returning("*");

  return result;
};

const del = table => async criteria => {
  const result = await database
    .table(table)
    .del()
    .where(criteria)
    .returning("*");

  return result[0];
};

module.exports = table => ({
  create: create(table),
  read: read(table),
  update: update(table),
  del: del(table)
});
