export interface Entry {
  id: number;
  reportId: number;
  message: string;
  priority: "low" | "medium" | "high";
  createdAt: Date;
}
