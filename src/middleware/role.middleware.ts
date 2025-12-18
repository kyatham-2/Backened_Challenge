import type { Request, Response, NextFunction } from "express";

export function requireRole(_role: string) {
  return (_req: Request, _res: Response, next: NextFunction) => {
    next();
  };
}
