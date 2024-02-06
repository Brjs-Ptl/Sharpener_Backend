const express = require('express');
const path = require("path");

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../", "3_2RouterHTML", "shop.html"));
});

module.exports = router;
