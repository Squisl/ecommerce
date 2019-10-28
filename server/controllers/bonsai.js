const { bonsai } = require("../queries");

const create = (req, res) => {
  bonsai.create(req.body);
};

module.exports = {
  create
};
