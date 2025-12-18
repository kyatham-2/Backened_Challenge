export interface Entry {
  id: string;
  message: string;
  priority: "low" | "medium" | "high";
  createdAt: number;
}
