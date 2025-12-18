"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryStore = void 0;
class EntryStore {
    constructor() {
        this.entries = new Map();
    }
    getByReportId(reportId) {
        return this.entries.get(reportId) ?? [];
    }
    addEntry(reportId, entry) {
        const list = this.entries.get(reportId) ?? [];
        list.push(entry);
        this.entries.set(reportId, list);
    }
}
exports.entryStore = new EntryStore();
