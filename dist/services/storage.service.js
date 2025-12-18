"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageService = exports.StorageService = void 0;
const path_1 = __importDefault(require("path"));
class StorageService {
    getFilePath(fileName) {
        return path_1.default.join(__dirname, "../../uploads", fileName);
    }
}
exports.StorageService = StorageService;
exports.storageService = new StorageService();
