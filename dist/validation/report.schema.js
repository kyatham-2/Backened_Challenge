"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReportSchema = void 0;
const zod_1 = require("zod");
exports.CreateReportSchema = zod_1.z.object({
    title: zod_1.z.string().min(3, "Title must be at least 3 characters"),
    description: zod_1.z.string().min(10, "Description must be at least 10 characters"),
    createdBy: zod_1.z.string().min(3, "Creator name required")
});
