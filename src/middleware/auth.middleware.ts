import type { Request, Response, NextFunction } from "express";

export function auth(_req: Request, _res: Response, next: NextFunction) {
  next(); // stub for challenge
}
