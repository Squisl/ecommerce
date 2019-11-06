const database = require("../database");
const common = require("./common");

const readAll = async () => {
  const result = await database.table("bonsai").select();
  return result;
};

module.exports = {
  ...common("bonsai"),
  readAll
};
