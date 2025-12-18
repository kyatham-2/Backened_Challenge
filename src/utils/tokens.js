"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = signToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = "secret123"; // In production, use env variable
function signToken(userId, role) {
    return jsonwebtoken_1.default.sign({ userId, role }, SECRET, { expiresIn: "1h" });
}
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, SECRET);
}
