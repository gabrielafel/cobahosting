const mongoose = require("mongoose"),
    koleksiSchema = mongoose.Schema({
        namaproduct: {
            type: String,
            required: true,
        },
        material: {
            type: String,
            required: true,
        },
        warna: {
            type: Object,
            required: true,
        },
        pxlxt: {
            type: String,
            required: true,
        },
        lainnya: {
            type: String,
            required: true,
        },
        harga: {
            type: String,
            required: true,
        },
        gambar: {
            type: String,
            required: true,
        },
        tas: {
            type: String,
            required: true,
        },
        merk: {
            type: String,
            required: true,
        },
        link:{
            type: String,
            required: true,
        }
    });
module.exports = mongoose.model("Koleksi", koleksiSchema);