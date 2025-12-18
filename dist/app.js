"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reports_routes_1 = __importDefault(require("./routes/reports.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/reports", reports_routes_1.default);
app.get("/", (_req, res) => {
    res.send("Backend Challenge API is running!");
});
app.use(error_middleware_1.errorHandler);
exports.default = app;
