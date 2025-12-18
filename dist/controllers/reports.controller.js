"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportsController = void 0;
const reports_service_1 = require("../services/reports.service");
exports.reportsController = {
    create(req, res) {
        const report = reports_service_1.reportService.createReport(req.body);
        return res.status(201).json(report);
    },
    get(req, res) {
        const id = Number(req.params.id);
        const report = reports_service_1.reportService.getReport(id);
        if (!report) {
            return res.status(404).json({ error: "Not found" });
        }
        return res.json(report);
    },
    update(req, res) {
        const id = Number(req.params.id);
        const updated = reports_service_1.reportService.updateReport(id, req.body);
        if (!updated) {
            return res.status(404).json({ error: "Not found" });
        }
        return res.json(updated);
    },
    upload(req, res) {
        const id = Number(req.params.id);
        if (!req.file) {
            return res.status(400).json({ error: "File missing" });
        }
        const saved = reports_service_1.reportService.saveAttachment(id, req.file);
        if (!saved) {
            return res.status(404).json({ error: "Not found" });
        }
        return res.json(saved);
    }
};
