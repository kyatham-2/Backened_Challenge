import { reportStore } from "../data/reportStore";

export const reportService = {
  createReport(data: any) {
    return reportStore.create(data);
  },

  getReport(id: number) {
    return reportStore.get(id);
  },

  updateReport(id: number, data: any) {
    return reportStore.update(id, data);
  },

  saveAttachment(id: number, file: Express.Multer.File) {
    return reportStore.addAttachment(id, file);
  }
};
