"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reports_controller_1 = require("../controllers/reports.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const validate_middleware_1 = require("../middleware/validate.middleware");
const multer_1 = __importDefault(require("multer"));
const report_validation_1 = require("../validation/report.validation");
const router = express_1.default.Router();
const upload = (0, multer_1.default)({
    dest: "uploads/",
    limits: { fileSize: 5 * 1024 * 1024 }
});
// GET /reports/:id
router.get("/:id", auth_middleware_1.auth, reports_controller_1.reportsController.get);
// POST /reports
router.post("/", auth_middleware_1.auth, (0, role_middleware_1.requireRole)("editor"), (0, validate_middleware_1.validate)(report_validation_1.createReportSchema), reports_controller_1.reportsController.create);
// PUT /reports/:id
router.put("/:id", auth_middleware_1.auth, (0, role_middleware_1.requireRole)("editor"), (0, validate_middleware_1.validate)(report_validation_1.updateReportSchema), reports_controller_1.reportsController.update);
// POST /reports/:id/attachment
router.post("/:id/attachment", auth_middleware_1.auth, (0, role_middleware_1.requireRole)("editor"), upload.single("file"), reports_controller_1.reportsController.upload);
exports.default = router;
