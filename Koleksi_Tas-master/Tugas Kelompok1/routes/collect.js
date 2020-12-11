const express = require('express');
const router = express.Router();

const dbKoleksi = require('../public/js/input');

router.get("/taspria", (req, res) => {
tas = dbKoleksi.find({merk: 'burberry', tas: 'pria'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas pria/burberry", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});


module.exports = router;