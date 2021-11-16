const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    so_type: {
        type: String,
        required: true,
        unique: true
    },
    so_ver: {
        type: String,
    },
    pass: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("test", UserSchema, "test");