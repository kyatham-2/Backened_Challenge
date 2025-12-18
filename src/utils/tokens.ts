import jwt from "jsonwebtoken";

const SECRET = "secret123"; // In production, use env variable

export function signToken(userId: string, role: "reader" | "editor") {
  return jwt.sign({ userId, role }, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}
