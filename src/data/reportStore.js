"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportStore = void 0;
class ReportStore {
    constructor() {
        this.reports = new Map();
        this.attachments = new Map();
        this.idCounter = 1;
    }
    create(data) {
        const id = this.idCounter++;
        const report = {
            id,
            title: data.title,
            description: data.description ?? "",
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.reports.set(id, report);
        return report;
    }
    get(id) {
        return this.reports.get(id) ?? null;
    }
    update(id, data) {
        const report = this.get(id);
        if (!report)
            return null;
        const updated = {
            ...report,
            ...data,
            updatedAt: new Date()
        };
        this.reports.set(id, updated);
        return updated;
    }
    addAttachment(id, file) {
        const report = this.get(id);
        if (!report)
            return null;
        const entry = { filename: file.filename, original: file.originalname };
        if (!this.attachments.has(id)) {
            this.attachments.set(id, []);
        }
        this.attachments.get(id).push(entry);
        return { reportId: id, file: entry };
    }
}
exports.reportStore = new ReportStore();
