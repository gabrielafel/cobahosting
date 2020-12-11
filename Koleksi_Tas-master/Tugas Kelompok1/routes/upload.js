const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'upload/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const Koleksi = require('../public/js/input')

router.get("/input", (req, res) => res.render("pages/input"));

router.get("/admin", (req, res) => res.render("pages/admin"));


  router.post("/admin", async (req, res, next) => {
    const namaadmin = req.body.namaadmin;
    const passadmin = req.body.passadmin;

    let errors = []

    if (namaadmin == "admin" && passadmin == "admin"){
      res.render('pages/input');
    }
    else {
      errors.push({ msg: "Hanya admin yang dapat mengakses !!" });
    }
  });

// handle post input
var upload = multer({ storage: storage })
  router.post('/input', upload.single('gambar') , (req, res) => {
    const namaproduct = req.body.namaproduct;
    const material = req.body.material;
    const warna = req.body.warna;
    const pxlxt = req.body.pxlxt;
    const lainnya = req.body.lainnya;
    const harga = req.body.harga;
    const tas = req.body.tas;
    const merk = req.body.merk;
    const gambar = req.file.filename;
    const link = req.body.link;

    let errors = []

    if (!namaproduct || !material || !warna || !pxlxt || !lainnya || !harga || !tas || !merk || !gambar || !link) {
      errors.push({ msg: "Harap isi semua data yang di minta" });
    }

    if (errors.length > 0) {
        res.render("pages/input", {
          errors,
          namaproduct,
          material,
          warna,
          pxlxt,
          lainnya,
          harga,
          tas,
          merk,
          gambar,
          link
        });
    } 
    else {
      const newKoleksi = new Koleksi({
        namaproduct,
        material,
        warna,
        pxlxt,
        lainnya,
        harga,
        tas,
        merk,
        gambar,
        link
      });

      newKoleksi
        .save()
        .then((koleksi) => {
          req.flash(
            "success_msg",
            "Anda berhasil upload tas"
          );
          res.redirect("/upload/input");
        })  
  };
});

module.exports = router;