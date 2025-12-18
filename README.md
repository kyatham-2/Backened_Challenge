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
- Validates report creation  
- Validates report updates  

### ✔ Authentication & Roles (Stubbed)
- Token-based authentication middleware included  
- Roles: reader/editor (stubbed but present)
- Pre-generated tokens provided for testing  

### ✔ In-Memory Data Storage
- ReportStore for reports  
- Attachment storage inside ReportStore  
- Suitable for quick testing without a database  

### ✔ Async Job Stub
- Placeholder async function for background jobs  

---

## ❌ Features Not Implemented (as per challenge requirements)

These features were not completed but are acknowledged:

- Pagination  
- Sorting  
- Compact view  
- include=entries, include=metrics  
- Idempotency key support  
- Strict RBAC enforcement (reader cannot update)  
- Signed download URLs  
- Metrics calculation  

---

# 🚀 Setup Instructions

### 1️⃣ Install dependencies
npm install

### 2️⃣ Start development server
npm run dev

Server available at:
http://localhost:3000

### 3️⃣ Build TypeScript
npx tsc

### 4️⃣ Run compiled build
node dist/server.js

---

# 🔐 Authentication

Each request must include:

Authorization: Bearer <token>

### Editor Token (full access)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwicm9sZSI6ImVkaXRvciIsImlhdCI6MTc2NjA5MTY3MywiZXhwIjoxNzY2MDk1MjczfQ.TTvpUqKMM68ZUJaELvMj1jABeaxunkQWeZoTMpOLeNQ

### Reader Token (read only)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyOTk5Iiwicm9sZSI6InJlYWRlciIsImlhdCI6MTc2NjA5MTY5MSwiZXhwIjoxNzY2MDk1MjkxfQ.g0eqWw-Oy35Ir-RxQ3OFgrH1yugzH2z9EgK3QXXRe5Q

---

# 🧪 Postman Usage

### Create Report
POST /reports  
Body (JSON):
{
  "title": "Road Safety Report",
  "description": "Details about road safety improvements."
}

### Get Report
GET /reports/1

### Update Report
PUT /reports/1  
Body (JSON):
{
  "title": "Updated Report Title"
}

### Upload Attachment
POST /reports/1/attachment  
Postman → Body → form-data  
Key: file  
Type: File  
Value: choose any file  

---

# 📁 Project Structure

src/  
 ├─ controllers/  
 ├─ middleware/  
 ├─ data/  
 ├─ services/  
 ├─ models/  
 ├─ routes/  
 ├─ utils/  
 ├─ validation/  
 ├─ app.ts  
 ├─ server.ts  

---

# ❓ What Is Missing?

- Real authorization logic  
- Metrics calculation  
- Entry aggregation  
- Pagination & sorting  
- Signed URLs for attachments  
- Idempotency handling  
- Stronger validation rules  
- Database storage  
- Production-grade error handling  

---

# 🏁 Summary

The API supports basic CRUD operations for reports, file uploads, simple validation, and token-based authentication.  
Remaining challenge items are clearly documented for future improvement.  
This implementation fulfills the core functional requirements of the backend challenge.

