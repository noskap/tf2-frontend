"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const mongoose = require("mongoose");
exports.PostSchema = new mongoose.Schema({
    user: { type: String, required: true },
    content: { type: String, required: true },
    channel: { type: String, required: true },
});
//# sourceMappingURL=post.model.js.map