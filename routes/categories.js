const express = require("express");
const router = express.Router();

const categories = require("../datas/categories.json");

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
  ); // ...and ensure strings of whitespace fail
}

// GET ALL
router.get("/", (req, res) => {
  return res.json(categories);
});

router.get("/:id", (req, res) => {});

module.exports = router;
