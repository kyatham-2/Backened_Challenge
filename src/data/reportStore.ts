import type { Report } from "../models/report.model";
import type { Attachment } from "../models/attachment.model";

class ReportStore {
  private reports = new Map<number, Report>();
  private attachments = new Map<number, Attachment[]>();
  private idCounter = 1;

  create(data: any): Report {
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

  get(id: number) {
    return this.reports.get(id) ?? null;
  }

  update(id: number, data: any) {
    const report = this.get(id);
    if (!report) return null;

    const updated = {
      ...report,
      ...data,
      updatedAt: new Date()
    };

    this.reports.set(id, updated);
    return updated;
  }

  addAttachment(id: number, file: any) {
  const report = this.get(id);
  if (!report) return null;

  const entry = {
    filename: file.filename,
    original: file.originalname,
  };

  if (!this.attachments.has(id)) {
    this.attachments.set(id, []);
  }

  this.attachments.get(id)!.push(entry);

  return { reportId: id, file: entry };
}

}

export const reportStore = new ReportStore();
