import { z } from "zod";

export const createReportSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

export const updateReportSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});
