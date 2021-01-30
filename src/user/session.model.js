"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSchema = void 0;
const mongoose = require("mongoose");
exports.SessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    expiry: {
        type: Date,
        required: true,
    },
    remember: {
        type: Boolean,
        required: true,
        default: false,
    },
    ipAddress: {
        type: String,
    },
    userAgent: {
        type: String,
    },
    browser: {
        type: String,
    },
    os: {
        type: String,
    },
    device: {
        type: String,
    },
    osVersion: {
        type: String,
    },
});
//# sourceMappingURL=session.model.js.map