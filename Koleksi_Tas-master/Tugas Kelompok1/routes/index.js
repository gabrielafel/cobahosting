const express = require('express');

const router = express.Router();

const { ensureAuthenticated } = require("../public/js/auth");

//abis login pindah home
router.get("/", ensureAuthenticated, (req, res) =>
  res.render("pages/home", {
    nama: req.user.nama,
  })
);

module.exports = router;