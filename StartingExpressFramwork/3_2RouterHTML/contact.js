const express = require('express');
const path = require("path");

const router = express.Router();

router.get('/contact_us', (req, res) => {
  res.sendFile(path.join(__dirname, "../", "3_2RouterHTML", "contact.html"));

});

// router.post('/contact_us', (req, res) => {
//   console.log(req.body);
//   res.redirect('/');
// });

module.exports = router;


