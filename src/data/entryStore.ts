import type { Entry } from "../models/entry.model";

class EntryStore {
  private entries = new Map<number, Entry[]>();

  getByReportId(reportId: number): Entry[] {
    return this.entries.get(reportId) ?? [];
  }

  addEntry(reportId: number, entry: Entry) {
    const list = this.entries.get(reportId) ?? [];
    list.push(entry);
    this.entries.set(reportId, list);
  }
}

export const entryStore = new EntryStore();
