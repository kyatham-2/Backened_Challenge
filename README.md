# Backend Challenge – Reporting API

This project implements a simplified reporting API using **Node.js**, **Express**, and **TypeScript** with **in-memory storage**.  
The API allows creating, retrieving, updating reports, and uploading attachments.

---

## ✅ Features Completed

### ✔ Report Management
- Create a report  
- Get a report by ID  
- Update a report  

### ✔ Attachment Upload
- Upload file to a report (`/reports/:id/attachment`)
- Multer used for handling file uploads  
- File metadata stored in memory  

### ✔ Validation (Zod)
- Create Report: validates title, description  
- Update Report: optional fields validated  

### ✔ Authentication & Roles (Stubbed)
- `auth` middleware included (accepts any token)  
- `requireRole("editor")` middleware stubbed  
- Tokens can be generated manually for testing  

### ✔ In-Memory Data Storage
- `ReportStore` for reports & attachments  
- `EntryStore` for entries (not used fully)  

### ✔ Async Job Stub
- Placeholder async job function provided

---

## ❌ Features NOT Implemented (but mentioned in challenge)

These can be added as “future improvements”:

- Pagination  
- Sorting  
- Compact responses  
- `include=entries`, `include=metrics`  
- Idempotency key support  
- Role-based blocking (reader should NOT update)  
- Time-limited signed URLs for attachments  

These limitations are noted in the design document.

---

# 🚀 Setup Instructions

### 1️⃣ Install dependencies
```sh
npm install
