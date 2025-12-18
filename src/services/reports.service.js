"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportService = void 0;
const reportStore_1 = require("../data/reportStore");
exports.reportService = {
    createReport(data) {
        return reportStore_1.reportStore.create(data);
    },
    getReport(id) {
        return reportStore_1.reportStore.get(id);
    },
    updateReport(id, data) {
        return reportStore_1.reportStore.update(id, data);
    },
    saveAttachment(id, file) {
        return reportStore_1.reportStore.addAttachment(id, file);
    }
};
