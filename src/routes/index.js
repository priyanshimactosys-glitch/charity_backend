const router = require("express").Router();

router.use("/roles", require("./role.routes"));

module.exports = router;
