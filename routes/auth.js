const express = require("express");
const router = express.Router();

// @router  GET api/auth
// @desc    Get logged in user
// @acces   Private
router.get("/", (req, res) => {
  res.send("get logged in user");
});

// @router  POST api/auth
// @desc    Auth user and get token
// @acces   Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
