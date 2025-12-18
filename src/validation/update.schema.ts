import { z } from "zod";

export const UpdateReportSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  status: z.enum(["draft", "submitted", "closed"]).optional(),
  
  // Custom business rule validation
  justification: z
    .string()
    .min(20, "Justification must be at least 20 characters")
    .optional()
});
