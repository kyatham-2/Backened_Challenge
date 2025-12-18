"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAsyncJob = runAsyncJob;
async function runAsyncJob(reportId) {
    console.log("Async job triggered for report:", reportId);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Async job finished for report:", reportId);
            resolve(true);
        }, 1000);
    });
}
