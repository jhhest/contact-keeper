const express = require("express");
const router = express.Router();

// @router  POST api/users
// @desc    Register a user
// @acces   Public
router.post("/", (req, res) => {
  res.send("register a user");
});

module.exports = router;
