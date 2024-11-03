const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("you are in articles");
});

module.exports = router;
