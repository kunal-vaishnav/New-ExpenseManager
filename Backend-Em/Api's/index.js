const router = require("express").Router();
router.use("/expense", require("./expense"));
module.exports = router;
