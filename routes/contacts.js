const express = require("express");
const router = express.Router();

// @router  POST api/contacts
// @desc    Get all users contacts
// @acces   Public
router.get("/", (req, res) => {
  res.send("Show all users");
});

// @router  POST api/contacts
// @desc    Add new contact
// @acces   Public
router.post("/", (req, res) => {
  res.send("add contact");
});

// @router  PUT api/contacts/:id
// @desc    update contact
// @acces   Private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// @router  DELETE api/contacts
// @desc    Delete a contact
// @acces   Private
router.post("/", (req, res) => {
  res.send("Delete a contact");
});
module.exports = router;
