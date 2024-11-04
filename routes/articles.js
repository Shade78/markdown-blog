const express = require("express");

const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new");
});

// whenever form for new article is submitted, we call this
router.post("/", (req, res) => {});

module.exports = router;
