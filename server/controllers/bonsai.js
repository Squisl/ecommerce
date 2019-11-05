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
    image: image.secure_url
  }));
  const result = await bonsai_images.create(fieldToInsert);
  console.log("Resss", result);
  for (let i = 0; i < req.files.length; i++) {
    await unlinkAsync(req.files[i].path);
  }
};

module.exports = {
  create,
  upload_images
};
