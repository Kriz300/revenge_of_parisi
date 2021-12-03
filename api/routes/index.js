const router = require("express").Router();

const save = require("./save");
const load = require("./load");

router.use("/save", save);
router.use("/load", load);

module.exports = router;