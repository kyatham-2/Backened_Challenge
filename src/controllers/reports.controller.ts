import { Request, Response } from "express";
import { reportService } from "../services/reports.service";

export const reportsController = {
  create(req: Request, res: Response) {
    const report = reportService.createReport(req.body);
    return res.status(201).json(report);
  },

  get(req: Request, res: Response) {
    const id = Number(req.params.id);
    const report = reportService.getReport(id);

    if (!report) {
      return res.status(404).json({ error: "Not found" });
    }

    return res.json(report);
  },

  update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const updated = reportService.updateReport(id, req.body);

    if (!updated) {
      return res.status(404).json({ error: "Not found" });
    }

    return res.json(updated);
  },

  upload(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (!req.file) {
      return res.status(400).json({ error: "File missing" });
    }

    const saved = reportService.saveAttachment(id, req.file);

    if (!saved) {
      return res.status(404).json({ error: "Not found" });
    }

    return res.json(saved);
  }
};
