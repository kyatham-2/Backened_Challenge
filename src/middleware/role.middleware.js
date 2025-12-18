"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = requireRole;
function requireRole(_role) {
    return (_req, _res, next) => {
        next();
    };
}
