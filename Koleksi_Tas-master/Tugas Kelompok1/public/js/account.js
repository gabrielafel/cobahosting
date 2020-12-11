const mongoose = require("mongoose"),
    userSchema = mongoose.Schema({
        nama: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    });
module.exports = mongoose.model("User", userSchema);