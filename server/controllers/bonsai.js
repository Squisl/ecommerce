const cloudinary = require("cloudinary").v2;
const { bonsai, bonsai_images } = require("../queries");
const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);

cloudinary.config({
  cloud_name: "dzqtmwpgs",
  api_key: "525255823465311",
  api_secret: "PQu_lPY9AEqc5Coe42CmsUMGkd8"
});

const read = async (req, res) => {
  const { bonsai_id } = req.params;
  try {
    const result = await bonsai.read({ id: bonsai_id });
    console.log("Result of read", result);
    res.send(result);
  } catch (e) {
    console.error(e);
  }
};

const readAll = async (req, res) => {
  try {
    const bonsais = await bonsai.readAll();
    res.send(bonsais);
  } catch (e) {
    console.error(e);
  }
};

const create = async (req, res) => {
  try {
    const newBonsai = await bonsai.create(req.body);
    res.send(newBonsai);
  } catch (e) {
    console.error(e);
  }
};

const upload_images = async (req, res) => {
  const { bonsai_id } = req.params;
  const images = await Promise.all(
    req.files.map(async file => {
      const result = await cloudinary.uploader.upload(file.path);
      return result;
    })
  );
  const fieldToInsert = images.map(image => ({
    bonsai_id,
    public_id: image.public_id,
    image: image.secure_url
  }));
  const result = await bonsai_images.create(fieldToInsert);
  console.log("Resss", result);
  res.send(result);
  for (let i = 0; i < req.files.length; i++) {
    await unlinkAsync(req.files[i].path);
  }
};

const update = async (req, res) => {
  const { bonsai_id } = req.params;
  const updatedBonsai = await bonsai.update({ id: bonsai_id }, req.body);
  res.send(updatedBonsai);
};

const del = async (req, res) => {
  const { bonsai_id } = req.params;
  try {
    const deletedBonsai = await bonsai.del({ id: bonsai_id });
    console.log("Deleted Bonsai:", deletedBonsai);
    res.send(deletedBonsai);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  read,
  readAll,
  create,
  upload_images,
  update,
  del
};
