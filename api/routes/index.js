const router = require("express").Router();

const register = require("./register");
const find = require("./find");
const upload = require("./upload");

router.use("/register", register);
router.use("/find", find);
router.use("/upload", upload);

module.exports = router;