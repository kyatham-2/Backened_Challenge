import express from "express";
import { reportsController } from "../controllers/reports.controller";
import { auth } from "../middleware/auth.middleware";
import { requireRole } from "../middleware/role.middleware";
import { validate } from "../middleware/validate.middleware";
import multer from "multer";

import {
  createReportSchema,
  updateReportSchema
} from "../validation/report.validation";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 }
});

// GET /reports/:id
router.get("/:id", auth, reportsController.get);

// POST /reports
router.post(
  "/",
  auth,
  requireRole("editor"),
  validate(createReportSchema),
  reportsController.create
);

// PUT /reports/:id
router.put(
  "/:id",
  auth,
  requireRole("editor"),
  validate(updateReportSchema),
  reportsController.update
);

// POST /reports/:id/attachment
router.post(
  "/:id/attachment",
  auth,
  requireRole("editor"),
  upload.single("file"),
  reportsController.upload
);

export default router;
