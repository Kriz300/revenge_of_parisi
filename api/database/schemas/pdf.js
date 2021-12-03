const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    pass: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    so: {
        type: String,
    },
    ver: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("pdfs", UserSchema, "pdf");