const { bonsai } = require("../queries");

const create = async (req, res) => {
  try {
    const newBonsai = await bonsai.create(req.body);
    res.send(newBonsai);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  create
};
