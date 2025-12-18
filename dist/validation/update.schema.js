"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReportSchema = void 0;
const zod_1 = require("zod");
exports.UpdateReportSchema = zod_1.z.object({
    title: zod_1.z.string().min(3).optional(),
    description: zod_1.z.string().min(10).optional(),
    status: zod_1.z.enum(["draft", "submitted", "closed"]).optional(),
    // Custom business rule validation
    justification: zod_1.z
        .string()
        .min(20, "Justification must be at least 20 characters")
        .optional()
});
