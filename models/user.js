"use strict";
exports.__esModule = true;
exports.User = exports.userSchema = void 0;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.userSchema = new Schema({
    fristName: String,
    lastName: String,
    ssn: String,
    phoneNumber: { type: String, unique: true },
    phoneNumberValidate: { type: Boolean, "default": false },
    email: { type: String, lowercase: true },
    image: String,
    authCode: Number,
    level: [
        {
            type: String,
            "enum": [
                "superAdmin",
                "admin",
                "centerAdmin",
                "guest",
                "normal"
            ],
            "default": ["guest"]
        }
    ],
    guestUserId: String
}, { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } });
exports.User = mongoose.model('User', exports.userSchema);
