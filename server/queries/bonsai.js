const database = require("../database");
const common = require("./common");

const readAll = async () => {
  const result = await database.raw(
    "select *, array(select image from bonsai_images where bonsai_images.bonsai_id = bonsai.id) as images from bonsai;"
  );
  return result.rows;
};

const read = async ({ id }) => {
  const result = await database.raw(
    `select *, array(select image from bonsai_images where bonsai_images.bonsai_id = bonsai.id) as images from bonsai where id = ${id};`
  );
  return result.rows;
};

module.exports = {
  ...common("bonsai"),
  readAll,
  read
};
