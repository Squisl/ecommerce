const { Router } = require("express");
const multer = require("multer");
const { bonsai } = require("../controllers");

const router = Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "temp_images");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage }).array("file");

router
  .route("/")
  .get(bonsai.readAll)
  .post(bonsai.create);
router.post("/upload_images/:bonsai_id", upload, bonsai.upload_images);
router.get("/count", bonsai.count);
router
  .route("/:bonsai_id")
  .get(bonsai.read)
  .post(bonsai.update)
  .delete(bonsai.del);
router.get("/page/:current_page/limit/:page_limit", bonsai.pagination);

module.exports = router;
