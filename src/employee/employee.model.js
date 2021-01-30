"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSchema = void 0;
const mongoose = require("mongoose");
exports.EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
});
//# sourceMappingURL=employee.model.js.map